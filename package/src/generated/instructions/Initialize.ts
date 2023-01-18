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
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataSerializer,
} from '../types';

// Accounts.
export type InitializeInstructionAccounts = {
  candyMachine: PublicKey;
  authorityPda: PublicKey;
  authority?: PublicKey;
  payer?: Signer;
  collectionMetadata: PublicKey;
  collectionMint: PublicKey;
  collectionMasterEdition: PublicKey;
  collectionUpdateAuthority: Signer;
  collectionAuthorityRecord: PublicKey;
  tokenMetadataProgram: PublicKey;
  systemProgram?: PublicKey;
};

// Arguments.
export type InitializeInstructionData = {
  discriminator: Array<number>;
  data: CandyMachineData;
};

export type InitializeInstructionArgs = { data: CandyMachineDataArgs };

export function getInitializeInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<InitializeInstructionArgs, InitializeInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    InitializeInstructionArgs,
    InitializeInstructionData,
    InitializeInstructionData
  >(
    s.struct<InitializeInstructionData>(
      [
        ['discriminator', s.array(s.u8, 8)],
        ['data', getCandyMachineDataSerializer(context)],
      ],
      'InitializeInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
        ...value,
      } as InitializeInstructionData)
  ) as Serializer<InitializeInstructionArgs, InitializeInstructionData>;
}

// Instruction.
export function initialize(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    identity: Context['identity'];
    payer: Context['payer'];
    programs?: Context['programs'];
  },
  input: InitializeInstructionAccounts & InitializeInstructionArgs
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
  const authorityPdaAccount = input.authorityPda;
  const authorityAccount = input.authority ?? context.identity.publicKey;
  const payerAccount = input.payer ?? context.payer.publicKey;
  const collectionMetadataAccount = input.collectionMetadata;
  const collectionMintAccount = input.collectionMint;
  const collectionMasterEditionAccount = input.collectionMasterEdition;
  const collectionUpdateAuthorityAccount = input.collectionUpdateAuthority;
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;
  const tokenMetadataProgramAccount = input.tokenMetadataProgram;
  const systemProgramAccount = input.systemProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };

  // Candy Machine.
  keys.push({
    pubkey: candyMachineAccount,
    isSigner: false,
    isWritable: isWritable(candyMachineAccount, true),
  });

  // Authority Pda.
  keys.push({
    pubkey: authorityPdaAccount,
    isSigner: false,
    isWritable: isWritable(authorityPdaAccount, true),
  });

  // Authority.
  keys.push({
    pubkey: authorityAccount,
    isSigner: false,
    isWritable: isWritable(authorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, false),
  });

  // Collection Metadata.
  keys.push({
    pubkey: collectionMetadataAccount,
    isSigner: false,
    isWritable: isWritable(collectionMetadataAccount, false),
  });

  // Collection Mint.
  keys.push({
    pubkey: collectionMintAccount,
    isSigner: false,
    isWritable: isWritable(collectionMintAccount, false),
  });

  // Collection Master Edition.
  keys.push({
    pubkey: collectionMasterEditionAccount,
    isSigner: false,
    isWritable: isWritable(collectionMasterEditionAccount, false),
  });

  // Collection Update Authority.
  signers.push(collectionUpdateAuthorityAccount);
  keys.push({
    pubkey: collectionUpdateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(collectionUpdateAuthorityAccount, true),
  });

  // Collection Authority Record.
  keys.push({
    pubkey: collectionAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(collectionAuthorityRecordAccount, true),
  });

  // Token Metadata Program.
  keys.push({
    pubkey: tokenMetadataProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenMetadataProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Data.
  const data = getInitializeInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
