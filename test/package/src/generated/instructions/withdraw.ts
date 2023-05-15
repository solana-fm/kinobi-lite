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
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type WithdrawInstructionAccounts = {
  candyMachine: PublicKey;
  authority?: Signer;
};

// Data.
export type WithdrawInstructionData = { discriminator: Array<number> };

export type WithdrawInstructionDataArgs = {};

export function getWithdrawInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<WithdrawInstructionDataArgs, WithdrawInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    WithdrawInstructionDataArgs,
    any,
    WithdrawInstructionData
  >(
    s.struct<WithdrawInstructionData>(
      [['discriminator', s.array(s.u8(), { size: 8 })]],
      { description: 'WithdrawInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
    })
  ) as Serializer<WithdrawInstructionDataArgs, WithdrawInstructionData>;
}

// Instruction.
export function withdraw(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: WithdrawInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplCandyMachineCore',
      'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  addObjectProperty(
    resolvingAccounts,
    'authority',
    input.authority ?? context.identity
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Candy Machine.
  keys.push({
    pubkey: resolvedAccounts.candyMachine,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.candyMachine, true),
  });

  // Authority.
  signers.push(resolvedAccounts.authority);
  keys.push({
    pubkey: resolvedAccounts.authority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.authority, true),
  });

  // Data.
  const data = getWithdrawInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
