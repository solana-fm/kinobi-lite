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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts =
  {
    /** New Metadata key (pda of ['metadata', program id, mint id]) */
    metadata: PublicKey;
    /** New Edition V1 (pda of ['metadata', program id, mint id, 'edition']) */
    edition: PublicKey;
    /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
    masterEdition: PublicKey;
    /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    mint: PublicKey;
    /** Mint authority of new mint */
    mintAuthority: Signer;
    /** Printing Mint of master record edition */
    printingMint: PublicKey;
    /** Token account containing Printing mint token to be transferred */
    masterTokenAccount: PublicKey;
    /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number]) */
    editionMarker: PublicKey;
    /** Burn authority for this token */
    burnAuthority: Signer;
    /** payer */
    payer?: Signer;
    /** update authority info for new metadata account */
    masterUpdateAuthority: PublicKey;
    /** Master record metadata account */
    masterMetadata: PublicKey;
    /** Token program */
    tokenProgram?: PublicKey;
    /** System program */
    systemProgram?: PublicKey;
    /** Rent info */
    rent?: PublicKey;
    /** Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list. */
    reservationList?: PublicKey;
  };

// Data.
export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData =
  { discriminator: number };

export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataArgs =
  {};

export function getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataArgs,
  DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataArgs,
    any,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
  >(
    s.struct<DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData>(
      [['discriminator', s.u8()]],
      {
        description:
          'DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData',
      }
    ),
    (value) => ({ ...value, discriminator: 3 })
  ) as Serializer<
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataArgs,
    DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData
  >;
}

// Instruction.
export function deprecatedMintNewEditionFromMasterEditionViaPrintingToken(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'tokenProgram',
    input.tokenProgram ?? {
      ...context.programs.getPublicKey(
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'systemProgram',
    input.systemProgram ?? {
      ...context.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'rent',
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111')
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Edition.
  keys.push({
    pubkey: resolvedAccounts.edition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.edition, true),
  });

  // Master Edition.
  keys.push({
    pubkey: resolvedAccounts.masterEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, true),
  });

  // Mint Authority.
  signers.push(resolvedAccounts.mintAuthority);
  keys.push({
    pubkey: resolvedAccounts.mintAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.mintAuthority, false),
  });

  // Printing Mint.
  keys.push({
    pubkey: resolvedAccounts.printingMint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.printingMint, true),
  });

  // Master Token Account.
  keys.push({
    pubkey: resolvedAccounts.masterTokenAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterTokenAccount, true),
  });

  // Edition Marker.
  keys.push({
    pubkey: resolvedAccounts.editionMarker,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.editionMarker, true),
  });

  // Burn Authority.
  signers.push(resolvedAccounts.burnAuthority);
  keys.push({
    pubkey: resolvedAccounts.burnAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.burnAuthority, false),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, false),
  });

  // Master Update Authority.
  keys.push({
    pubkey: resolvedAccounts.masterUpdateAuthority,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterUpdateAuthority, false),
  });

  // Master Metadata.
  keys.push({
    pubkey: resolvedAccounts.masterMetadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterMetadata, false),
  });

  // Token Program.
  keys.push({
    pubkey: resolvedAccounts.tokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Rent.
  keys.push({
    pubkey: resolvedAccounts.rent,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.rent, false),
  });

  // Reservation List (optional).
  if (resolvedAccounts.reservationList) {
    keys.push({
      pubkey: resolvedAccounts.reservationList,
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.reservationList, true),
    });
  }

  // Data.
  const data =
    getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer(
      context
    ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}