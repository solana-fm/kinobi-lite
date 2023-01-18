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
export type RevokeUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey;
  /** Owner */
  owner: Signer;
  /** A Use Authority */
  user: PublicKey;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey;
  /** Mint of Metadata */
  mint: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type RevokeUseAuthorityInstructionData = { discriminator: number };

export type RevokeUseAuthorityInstructionArgs = {};

export function getRevokeUseAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RevokeUseAuthorityInstructionArgs,
  RevokeUseAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RevokeUseAuthorityInstructionArgs,
    RevokeUseAuthorityInstructionData,
    RevokeUseAuthorityInstructionData
  >(
    s.struct<RevokeUseAuthorityInstructionData>(
      [['discriminator', s.u8]],
      'RevokeUseAuthorityInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 21, ...value } as RevokeUseAuthorityInstructionData)
  ) as Serializer<
    RevokeUseAuthorityInstructionArgs,
    RevokeUseAuthorityInstructionData
  >;
}

// Instruction.
export function revokeUseAuthority(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: RevokeUseAuthorityInstructionAccounts
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
  const useAuthorityRecordAccount = input.useAuthorityRecord;
  const ownerAccount = input.owner;
  const userAccount = input.user;
  const ownerTokenAccountAccount = input.ownerTokenAccount;
  const mintAccount = input.mint;
  const metadataAccount = input.metadata;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const rentAccount = input.rent;

  // Use Authority Record.
  keys.push({
    pubkey: useAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(useAuthorityRecordAccount, true),
  });

  // Owner.
  signers.push(ownerAccount);
  keys.push({
    pubkey: ownerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(ownerAccount, true),
  });

  // User.
  keys.push({
    pubkey: userAccount,
    isSigner: false,
    isWritable: isWritable(userAccount, false),
  });

  // Owner Token Account.
  keys.push({
    pubkey: ownerTokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(ownerTokenAccountAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent (optional).
  if (rentAccount) {
    keys.push({
      pubkey: rentAccount,
      isSigner: false,
      isWritable: isWritable(rentAccount, false),
    });
  }

  // Data.
  const data = getRevokeUseAuthorityInstructionDataSerializer(
    context
  ).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
