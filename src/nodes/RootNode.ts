import type { Idl } from '../idl';
import type { AccountNode } from './AccountNode';
import type { DefinedTypeNode } from './DefinedTypeNode';
import type { ErrorNode } from './ErrorNode';
import { EventNode } from './EventNode';
import type { InstructionNode } from './InstructionNode';
import type { Node } from './Node';
import { ProgramNode, programNodeFromIdl } from './ProgramNode';

export type IdlInputs = string | Partial<Idl> | (string | Partial<Idl>)[];

export type RootNode = {
  readonly __rootNode: unique symbol;
  readonly kind: 'rootNode';
  readonly programs: ProgramNode[];
};

export function rootNode(programs: ProgramNode[]): RootNode {
  return { kind: 'rootNode', programs } as RootNode;
}

export function rootNodeFromIdls(idls: IdlInputs): RootNode {
  const idlArray = Array.isArray(idls) ? idls : [idls];
  const programs = idlArray.map((idl) =>
    programNodeFromIdl(idl as Partial<Idl>)
  );
  return rootNode(programs);
}

export function getAllAccounts(node: RootNode): AccountNode[] {
  return node.programs.flatMap((program) => program.accounts);
}

export function getAllDefinedTypes(node: RootNode): DefinedTypeNode[] {
  return node.programs.flatMap((program) => program.definedTypes);
}

export function getAllInstructions(node: RootNode): InstructionNode[] {
  return node.programs.flatMap((program) => program.instructions);
}

export function getAllErrors(node: RootNode): ErrorNode[] {
  return node.programs.flatMap((program) => program.errors);
}

export function getAllEvents(node: RootNode): EventNode[] {
  return node.programs.flatMap((program) => program.events ?? []);
}

export function isRootNode(node: Node | null): node is RootNode {
  return !!node && node.kind === 'rootNode';
}

export function assertRootNode(node: Node | null): asserts node is RootNode {
  if (!isRootNode(node)) {
    throw new Error(`Expected rootNode, got ${node?.kind ?? 'null'}.`);
  }
}
