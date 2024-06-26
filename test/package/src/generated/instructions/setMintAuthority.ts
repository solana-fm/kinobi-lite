/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type SetMintAuthorityInstructionAccounts = {
  candyMachine: PublicKey | Pda;
  authority?: Signer;
  mintAuthority: Signer;
};

// Data.
export type SetMintAuthorityInstructionData = { discriminator: Array<number> };

export type SetMintAuthorityInstructionDataArgs = {};

/** @deprecated Use `getSetMintAuthorityInstructionDataSerializer()` without any argument instead. */
export function getSetMintAuthorityInstructionDataSerializer(
  _context: object
): Serializer<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
>;
export function getSetMintAuthorityInstructionDataSerializer(): Serializer<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
>;
export function getSetMintAuthorityInstructionDataSerializer(
  _context: object = {}
): Serializer<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
> {
  return mapSerializer<
    SetMintAuthorityInstructionDataArgs,
    any,
    SetMintAuthorityInstructionData
  >(
    struct<SetMintAuthorityInstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'SetMintAuthorityInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
    })
  ) as Serializer<
    SetMintAuthorityInstructionDataArgs,
    SetMintAuthorityInstructionData
  >;
}

// Instruction.
export function setMintAuthority(
  context: Pick<Context, 'programs' | 'identity'>,
  input: SetMintAuthorityInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    candyMachine: [input.candyMachine, true] as const,
    mintAuthority: [input.mintAuthority, false] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.candyMachine, false);
  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.mintAuthority, false);

  // Data.
  const data = getSetMintAuthorityInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
