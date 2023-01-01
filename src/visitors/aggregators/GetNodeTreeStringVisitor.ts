import type * as nodes from '../../nodes';
import { Visitor } from '../Visitor';

export class GetNodeTreeStringVisitor implements Visitor<string> {
  indent = 0;

  readonly separator: string;

  constructor(separator = '|   ') {
    this.separator = separator;
  }

  visitRoot(root: nodes.RootNode): string {
    this.indent += 1;
    const children = root.programs.map((program) => program.accept(this));
    this.indent -= 1;
    return [this.indented('[RootNode]'), ...children].join('\n');
  }

  visitProgram(program: nodes.ProgramNode): string {
    this.indent += 1;
    const children = [
      ...program.accounts.map((account) => account.accept(this)),
      ...program.instructions.map((instruction) => instruction.accept(this)),
      ...program.definedTypes.map((type) => type.accept(this)),
      ...program.errors.map((type) => type.accept(this)),
    ];
    this.indent -= 1;
    const data = program.metadata;
    const tags = [];
    if (data.address) tags.push(`address: ${data.address}`);
    if (data.version) tags.push(`version: ${data.version}`);
    if (data.origin) tags.push(`origin: ${data.origin}`);
    const tagsStr = tags.length > 0 ? ` (${tags.join(', ')})` : '';
    return [
      this.indented(`[ProgramNode] ${data.name}${tagsStr}`),
      ...children,
    ].join('\n');
  }

  visitAccount(account: nodes.AccountNode): string {
    this.indent += 1;
    const child = account.type.accept(this);
    this.indent -= 1;
    return [this.indented(`[AccountNode] ${account.name}`), child].join('\n');
  }

  visitInstruction(instruction: nodes.InstructionNode): string {
    const children: string[] = [];
    this.indent += 1;
    children.push(this.indented('accounts:'));
    this.indent += 1;
    children.push(
      ...instruction.accounts.map((account) => {
        const tags = [];
        if (account.isMutable) tags.push('mutable');
        if (account.isSigner) tags.push('signer');
        if (account.isOptional) tags.push('optional');
        if (account.defaultsTo)
          tags.push(`defaults to ${account.defaultsTo.kind}`);
        const tagsAsString = tags.length > 0 ? ` (${tags.join(', ')})` : '';
        return this.indented(account.name + tagsAsString);
      })
    );
    this.indent -= 1;
    children.push(this.indented('arguments:'));
    this.indent += 1;
    children.push(instruction.args.accept(this));
    this.indent -= 1;
    this.indent -= 1;
    return [
      this.indented(`[InstructionNode] ${instruction.name}`),
      ...children,
    ].join('\n');
  }

  visitDefinedType(definedType: nodes.DefinedTypeNode): string {
    this.indent += 1;
    const child = definedType.type.accept(this);
    this.indent -= 1;
    return [this.indented(`[DefinedTypeNode] ${definedType.name}`), child].join(
      '\n'
    );
  }

  visitError(error: nodes.ErrorNode): string {
    return this.indented(
      `[ErrorNode] ${error.name} (${error.code}): ${error.message}`
    );
  }

  visitTypeArray(typeArray: nodes.TypeArrayNode): string {
    this.indent += 1;
    const child = typeArray.itemType.accept(this);
    this.indent -= 1;
    return [
      this.indented(`[TypeArrayNode] Size: ${typeArray.size}`),
      child,
    ].join('\n');
  }

  visitTypeDefinedLink(typeDefinedLink: nodes.TypeDefinedLinkNode): string {
    return this.indented(
      `[TypeDefinedLinkNode] ${typeDefinedLink.definedType}`
    );
  }

  visitTypeEnum(typeEnum: nodes.TypeEnumNode): string {
    const children = typeEnum.variants.map((variant) => {
      const variantStr: string[] = [];
      this.indent += 1;
      const variantSuffix =
        variant.kind === 'empty' ? '' : ` (${variant.kind}):`;
      variantStr.push(this.indented(`${variant.name}${variantSuffix}`));
      if (variant.kind === 'struct') {
        this.indent += 1;
        variantStr.push(variant.type.accept(this));
        this.indent -= 1;
      } else if (variant.kind === 'tuple') {
        this.indent += 1;
        variantStr.push(variant.type.accept(this));
        this.indent -= 1;
      }
      this.indent -= 1;
      return variantStr.join('\n');
    });

    return [
      this.indented(
        `[TypeEnumNode]${typeEnum.name ? ` ${typeEnum.name}` : ''}`
      ),
      ...children,
    ].join('\n');
  }

  visitTypeLeaf(typeLeaf: nodes.TypeLeafNode): string {
    return this.indented(`[TypeLeafNode] ${typeLeaf.type}`);
  }

  visitTypeMap(typeMap: nodes.TypeMapNode): string {
    const result: string[] = [];
    result.push(this.indented(`[TypeMapNode] ${typeMap.mapType}`));
    this.indent += 1;
    result.push(this.indented('keys:'));
    this.indent += 1;
    result.push(typeMap.keyType.accept(this));
    this.indent -= 1;
    result.push(this.indented('values:'));
    this.indent += 1;
    result.push(typeMap.valueType.accept(this));
    this.indent -= 1;
    this.indent -= 1;
    return result.join('\n');
  }

  visitTypeOption(typeOption: nodes.TypeOptionNode): string {
    this.indent += 1;
    const child = typeOption.type.accept(this);
    this.indent -= 1;
    return [this.indented('[TypeOptionNode]'), child].join('\n');
  }

  visitTypeSet(typeSet: nodes.TypeSetNode): string {
    this.indent += 1;
    const child = typeSet.type.accept(this);
    this.indent -= 1;
    return [this.indented(`[TypeSetNode] ${typeSet.setType}`), child].join(
      '\n'
    );
  }

  visitTypeStruct(typeStruct: nodes.TypeStructNode): string {
    this.indent += 1;
    const children = typeStruct.fields.map((field) => {
      this.indent += 1;
      const fieldStr = field.type.accept(this);
      this.indent -= 1;
      return [this.indented(`${field.name}:`), fieldStr].join('\n');
    });
    this.indent -= 1;
    return [
      this.indented(`[TypeStructNode] ${typeStruct.name}`),
      ...children,
    ].join('\n');
  }

  visitTypeTuple(typeTuple: nodes.TypeTupleNode): string {
    this.indent += 1;
    const children = typeTuple.itemTypes.map((itemType) =>
      itemType.accept(this)
    );
    this.indent -= 1;
    return [this.indented('[TypeTupleNode]'), ...children].join('\n');
  }

  visitTypeVec(typeVec: nodes.TypeVecNode): string {
    this.indent += 1;
    const child = typeVec.itemType.accept(this);
    this.indent -= 1;
    return [this.indented('[TypeVecNode]'), child].join('\n');
  }

  indented(text: string) {
    return this.separator.repeat(this.indent) + text;
  }
}