import * as nodes from '../../nodes';
import { camelCase, pascalCase } from '../../utils';
import { JavaScriptImportMap } from './JavaScriptImportMap';

export function renderJavaScriptValueNode(
  value: nodes.ValueNode,
  types: Map<string, nodes.DefinedTypeNode>
): {
  imports: JavaScriptImportMap;
  render: string;
} {
  const imports = new JavaScriptImportMap();
  switch (value.__kind) {
    case 'list':
    case 'tuple':
      const list = value.values.map((v) => renderJavaScriptValueNode(v, types));
      return {
        imports: imports.mergeWith(...list.map((c) => c.imports)),
        render: `[${list.map((c) => c.render).join(', ')}]`,
      };
    case 'set':
      const set = value.values.map((v) => renderJavaScriptValueNode(v, types));
      return {
        imports: imports.mergeWith(...set.map((c) => c.imports)),
        render: `new Set([${set.map((c) => c.render).join(', ')}])`,
      };
    case 'map':
      const map = value.values.map(([k, v]) => {
        const mapKey = renderJavaScriptValueNode(k, types);
        const mapValue = renderJavaScriptValueNode(v, types);
        return {
          imports: mapKey.imports.mergeWith(mapValue.imports),
          render: `[${mapKey.render}, ${mapValue.render}]`,
        };
      });
      return {
        imports: imports.mergeWith(...map.map((c) => c.imports)),
        render: `new Map([${map.map((c) => c.render).join(', ')}])`,
      };
    case 'struct':
      const struct = Object.entries(value.values).map(([k, v]) => {
        const structValue = renderJavaScriptValueNode(v, types);
        return {
          imports: structValue.imports,
          render: `${k}: ${structValue.render}`,
        };
      });
      return {
        imports: imports.mergeWith(...struct.map((c) => c.imports)),
        render: `{ ${struct.map((c) => c.render).join(', ')} }`,
      };
    case 'enum':
      const enumName = pascalCase(value.enumType);
      const variantName = pascalCase(value.variant);
      const rawDependency = value.dependency ?? 'generated';
      const dependency =
        rawDependency === 'generated' ? 'generatedTypes' : rawDependency;

      if (value.value === 'scalar') {
        return {
          imports: imports.add(dependency, enumName),
          render: `${enumName}.${variantName}`,
        };
      }

      const enumFn = camelCase(value.enumType);
      imports.add(dependency, enumFn);

      if (value.value === 'empty') {
        return { imports, render: `${enumFn}('${variantName}')` };
      }

      const enumValue = renderJavaScriptValueNode(value.value, types);
      const fields = enumValue.render;
      imports.mergeWith(enumValue.imports);

      return {
        imports,
        render: `${enumFn}('${variantName}', ${fields})`,
      };
    case 'optionSome':
      const child = renderJavaScriptValueNode(value.value, types);
      return {
        imports: child.imports.add('core', 'some'),
        render: `some(${child.render})`,
      };
    case 'optionNone':
      return {
        imports: new JavaScriptImportMap().add('core', 'none'),
        render: 'none()',
      };
    case 'publicKey':
      return {
        imports: new JavaScriptImportMap().add('core', 'publicKey'),
        render: `publicKey("${value.value}")`,
      };
    case 'string':
    case 'number':
    case 'boolean':
      return { imports, render: JSON.stringify(value.value) };
    default:
      const neverDefault: never = value;
      throw new Error(`Unexpected value type ${(neverDefault as any).__kind}`);
  }
}
