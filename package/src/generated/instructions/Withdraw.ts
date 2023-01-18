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
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type WithdrawInstructionAccounts = {
  candyMachine: PublicKey;
  authority?: Signer;
};

// Arguments.
export type WithdrawInstructionData = { discriminator: Array<number> };

export type WithdrawInstructionArgs = {};

export function getWithdrawInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<WithdrawInstructionArgs, WithdrawInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    WithdrawInstructionArgs,
    WithdrawInstructionData,
    WithdrawInstructionData
  >(
    s.struct<WithdrawInstructionData>(
      [['discriminator', s.array(s.u8, 8)]],
      'WithdrawInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
        ...value,
      } as WithdrawInstructionData)
  ) as Serializer<WithdrawInstructionArgs, WithdrawInstructionData>;
}

// Instruction.
export function withdraw(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    identity: Context['identity'];
    programs?: Context['programs'];
  },
  input: WithdrawInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Resolved accounts.
  const candyMachineAccount = input.candyMachine;
  const authorityAccount = input.authority ?? context.identity.publicKey;

  // Candy Machine.
  keys.push({
    pubkey: candyMachineAccount,
    isSigner: false,
    isWritable: isWritable(candyMachineAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, true),
  });

  // Data.
  const data = getWithdrawInstructionDataSerializer(context).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
