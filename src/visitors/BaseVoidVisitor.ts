import * as nodes from '../nodes';
import type { Visitor } from './Visitor';

export abstract class BaseVoidVisitor implements Visitor<void> {
  visitRoot(root: nodes.RootNode): void {
    root.accounts.forEach((account) => account.accept(this));
    root.instructions.forEach((instruction) => instruction.accept(this));
    root.definedTypes.forEach((type) => type.accept(this));
  }

  visitAccount(account: nodes.AccountNode): void {
    account.type.accept(this);
  }

  visitInstruction(instruction: nodes.InstructionNode): void {
    instruction.args.forEach((arg) => arg.type.accept(this));
    instruction.discriminator?.type.accept(this);
  }

  visitDefinedType(definedType: nodes.DefinedTypeNode): void {
    definedType.type.accept(this);
  }

  visitTypeArray(typeArray: nodes.TypeArrayNode): void {
    typeArray.itemType.accept(this);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  visitTypeDefinedLink(typeDefinedLink: nodes.TypeDefinedLinkNode): void {
    //
  }

  visitTypeEnum(typeEnum: nodes.TypeEnumNode): void {
    typeEnum.variants.forEach((variant) => {
      if (variant.kind === 'struct') {
        variant.type.accept(this);
      } else if (variant.kind === 'tuple') {
        variant.fields.forEach((field) => field.accept(this));
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  visitTypeLeaf(typeLeaf: nodes.TypeLeafNode): void {
    //
  }

  visitTypeMap(typeMap: nodes.TypeMapNode): void {
    typeMap.keyType.accept(this);
    typeMap.valueType.accept(this);
  }

  visitTypeOption(typeOption: nodes.TypeOptionNode): void {
    typeOption.type.accept(this);
  }

  visitTypeSet(typeSet: nodes.TypeSetNode): void {
    typeSet.type.accept(this);
  }

  visitTypeStruct(typeStruct: nodes.TypeStructNode): void {
    typeStruct.fields.forEach((field) => field.type.accept(this));
  }

  visitTypeTuple(typeTuple: nodes.TypeTupleNode): void {
    typeTuple.itemTypes.forEach((itemType) => itemType.accept(this));
  }

  visitTypeVec(typeVec: nodes.TypeVecNode): void {
    typeVec.itemType.accept(this);
  }
}