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
export type RevokeCollectionAuthorityInstructionAccounts = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: PublicKey;
  /** Delegated Collection Authority */
  delegateAuthority: PublicKey;
  /** Update Authority, or Delegated Authority, of Collection NFT */
  revokeAuthority: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint of Metadata */
  mint: PublicKey;
};

// Arguments.
export type RevokeCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type RevokeCollectionAuthorityInstructionArgs = {};

export function getRevokeCollectionAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RevokeCollectionAuthorityInstructionArgs,
  RevokeCollectionAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RevokeCollectionAuthorityInstructionArgs,
    RevokeCollectionAuthorityInstructionData,
    RevokeCollectionAuthorityInstructionData
  >(
    s.struct<RevokeCollectionAuthorityInstructionData>(
      [['discriminator', s.u8]],
      'RevokeCollectionAuthorityInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 24,
        ...value,
      } as RevokeCollectionAuthorityInstructionData)
  ) as Serializer<
    RevokeCollectionAuthorityInstructionArgs,
    RevokeCollectionAuthorityInstructionData
  >;
}

// Instruction.
export function revokeCollectionAuthority(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: RevokeCollectionAuthorityInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;
  const delegateAuthorityAccount = input.delegateAuthority;
  const revokeAuthorityAccount = input.revokeAuthority;
  const metadataAccount = input.metadata;
  const mintAccount = input.mint;

  // Collection Authority Record.
  keys.push({
    pubkey: collectionAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(collectionAuthorityRecordAccount, true),
  });

  // Delegate Authority.
  keys.push({
    pubkey: delegateAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(delegateAuthorityAccount, true),
  });

  // Revoke Authority.
  signers.push(revokeAuthorityAccount);
  keys.push({
    pubkey: revokeAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(revokeAuthorityAccount, true),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Data.
  const data = getRevokeCollectionAuthorityInstructionDataSerializer(
    context
  ).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
