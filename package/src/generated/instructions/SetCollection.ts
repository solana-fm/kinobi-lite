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
export type SetCollectionInstructionAccounts = {
  candyMachine: PublicKey;
  authority?: Signer;
  authorityPda: PublicKey;
  payer?: Signer;
  collectionMint: PublicKey;
  collectionMetadata: PublicKey;
  collectionAuthorityRecord: PublicKey;
  newCollectionUpdateAuthority: Signer;
  newCollectionMetadata: PublicKey;
  newCollectionMint: PublicKey;
  newCollectionMasterEdition: PublicKey;
  newCollectionAuthorityRecord: PublicKey;
  tokenMetadataProgram: PublicKey;
  systemProgram?: PublicKey;
};

// Arguments.
export type SetCollectionInstructionData = { discriminator: Array<number> };

export type SetCollectionInstructionArgs = {};

export function getSetCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SetCollectionInstructionArgs, SetCollectionInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    SetCollectionInstructionArgs,
    SetCollectionInstructionData,
    SetCollectionInstructionData
  >(
    s.struct<SetCollectionInstructionData>(
      [['discriminator', s.array(s.u8, 8)]],
      'SetCollectionInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [192, 254, 206, 76, 168, 182, 59, 223],
        ...value,
      } as SetCollectionInstructionData)
  ) as Serializer<SetCollectionInstructionArgs, SetCollectionInstructionData>;
}

// Instruction.
export function setCollection(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    identity: Context['identity'];
    payer: Context['payer'];
    programs?: Context['programs'];
  },
  input: SetCollectionInstructionAccounts
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
  const authorityPdaAccount = input.authorityPda;
  const payerAccount = input.payer ?? context.payer.publicKey;
  const collectionMintAccount = input.collectionMint;
  const collectionMetadataAccount = input.collectionMetadata;
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;
  const newCollectionUpdateAuthorityAccount =
    input.newCollectionUpdateAuthority;
  const newCollectionMetadataAccount = input.newCollectionMetadata;
  const newCollectionMintAccount = input.newCollectionMint;
  const newCollectionMasterEditionAccount = input.newCollectionMasterEdition;
  const newCollectionAuthorityRecordAccount =
    input.newCollectionAuthorityRecord;
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

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Authority Pda.
  keys.push({
    pubkey: authorityPdaAccount,
    isSigner: false,
    isWritable: isWritable(authorityPdaAccount, true),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, false),
  });

  // Collection Mint.
  keys.push({
    pubkey: collectionMintAccount,
    isSigner: false,
    isWritable: isWritable(collectionMintAccount, false),
  });

  // Collection Metadata.
  keys.push({
    pubkey: collectionMetadataAccount,
    isSigner: false,
    isWritable: isWritable(collectionMetadataAccount, false),
  });

  // Collection Authority Record.
  keys.push({
    pubkey: collectionAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(collectionAuthorityRecordAccount, true),
  });

  // New Collection Update Authority.
  signers.push(newCollectionUpdateAuthorityAccount);
  keys.push({
    pubkey: newCollectionUpdateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(newCollectionUpdateAuthorityAccount, true),
  });

  // New Collection Metadata.
  keys.push({
    pubkey: newCollectionMetadataAccount,
    isSigner: false,
    isWritable: isWritable(newCollectionMetadataAccount, false),
  });

  // New Collection Mint.
  keys.push({
    pubkey: newCollectionMintAccount,
    isSigner: false,
    isWritable: isWritable(newCollectionMintAccount, false),
  });

  // New Collection Master Edition.
  keys.push({
    pubkey: newCollectionMasterEditionAccount,
    isSigner: false,
    isWritable: isWritable(newCollectionMasterEditionAccount, false),
  });

  // New Collection Authority Record.
  keys.push({
    pubkey: newCollectionAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(newCollectionAuthorityRecordAccount, true),
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
  const data = getSetCollectionInstructionDataSerializer(context).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
