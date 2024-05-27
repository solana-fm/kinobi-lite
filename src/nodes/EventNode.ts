import { IdlEvent } from 'src/idl';
import { InvalidKinobiTreeError, mainCase, PartialExcept } from '../shared';
import {
  InstructionDataArgsNode,
  instructionDataArgsNode,
} from './InstructionDataArgsNode';
import { Node } from './Node';
import { structTypeNodeFromIdl } from './StructTypeNode';

export type EventNode = {
  readonly __eventNode: unique symbol;
  readonly kind: 'eventNode';
  readonly name: string;
  readonly dataArgs: InstructionDataArgsNode;
};

export type EventNodeInput = Omit<
  PartialExcept<EventNode, 'name' | 'dataArgs'>,
  '__instructionNode' | 'kind'
>;

export function eventNode(input: EventNodeInput): EventNode {
  if (!input.name) {
    throw new InvalidKinobiTreeError('EventNode must have a name.');
  }
  const name = mainCase(input.name);
  return {
    kind: 'eventNode',
    name,
    dataArgs: input.dataArgs,
  } as EventNode;
}

export function eventNodeFromIdl(idl: Partial<IdlEvent>): EventNode {
  const idlName = idl.name ?? '';
  const name = mainCase(idlName);
  const dataArgs = structTypeNodeFromIdl({
    kind: 'struct',
    fields: idl.fields ?? [],
  });

  return eventNode({
    name,
    dataArgs: instructionDataArgsNode({
      name: `${name}`,
      struct: dataArgs,
    }),
  });
}

export function isEventNode(node: Node | null): node is EventNode {
  return !!node && node.kind === 'eventNode';
}

export function assertEventNode(node: Node | null): asserts node is EventNode {
  if (!isEventNode(node)) {
    throw new Error(`Expected eventNode, got ${node?.kind ?? 'null'}.`);
  }
}
