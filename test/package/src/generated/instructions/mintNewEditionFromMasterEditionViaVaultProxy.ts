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
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  getMintNewEditionFromMasterEditionViaTokenArgsSerializer,
} from '../types';

// Accounts.
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionAccounts = {
  /** New Metadata key (pda of ['metadata', program id, mint id]) */
  newMetadata: PublicKey;
  /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
  newEdition: PublicKey;
  /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'] */
  masterEdition: PublicKey;
  /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  newMint: PublicKey;
  /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
  editionMarkPda: PublicKey;
  /** Mint authority of new mint */
  newMintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Vault authority */
  vaultAuthority: Signer;
  /** Safety deposit token store account */
  safetyDepositStore: PublicKey;
  /** Safety deposit box */
  safetyDepositBox: PublicKey;
  /** Vault */
  vault: PublicKey;
  /** Update authority info for new metadata */
  newMetadataUpdateAuthority: PublicKey;
  /** Master record metadata account */
  metadata: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** Token vault program */
  tokenVaultProgram: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Data.
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

export function getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs,
  MintNewEditionFromMasterEditionViaVaultProxyInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs,
    any,
    MintNewEditionFromMasterEditionViaVaultProxyInstructionData
  >(
    s.struct<MintNewEditionFromMasterEditionViaVaultProxyInstructionData>(
      [
        ['discriminator', s.u8()],
        [
          'mintNewEditionFromMasterEditionViaTokenArgs',
          getMintNewEditionFromMasterEditionViaTokenArgsSerializer(context),
        ],
      ],
      {
        description:
          'MintNewEditionFromMasterEditionViaVaultProxyInstructionData',
      }
    ),
    (value) => ({ ...value, discriminator: 13 })
  ) as Serializer<
    MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs,
    MintNewEditionFromMasterEditionViaVaultProxyInstructionData
  >;
}

// Args.
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionArgs =
  MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs;

// Instruction.
export function mintNewEditionFromMasterEditionViaVaultProxy(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: MintNewEditionFromMasterEditionViaVaultProxyInstructionAccounts &
    MintNewEditionFromMasterEditionViaVaultProxyInstructionArgs
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
  const resolvingArgs = {};
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
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // New Metadata.
  keys.push({
    pubkey: resolvedAccounts.newMetadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.newMetadata, true),
  });

  // New Edition.
  keys.push({
    pubkey: resolvedAccounts.newEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.newEdition, true),
  });

  // Master Edition.
  keys.push({
    pubkey: resolvedAccounts.masterEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, true),
  });

  // New Mint.
  keys.push({
    pubkey: resolvedAccounts.newMint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.newMint, true),
  });

  // Edition Mark Pda.
  keys.push({
    pubkey: resolvedAccounts.editionMarkPda,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.editionMarkPda, true),
  });

  // New Mint Authority.
  signers.push(resolvedAccounts.newMintAuthority);
  keys.push({
    pubkey: resolvedAccounts.newMintAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.newMintAuthority, false),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Vault Authority.
  signers.push(resolvedAccounts.vaultAuthority);
  keys.push({
    pubkey: resolvedAccounts.vaultAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.vaultAuthority, false),
  });

  // Safety Deposit Store.
  keys.push({
    pubkey: resolvedAccounts.safetyDepositStore,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.safetyDepositStore, false),
  });

  // Safety Deposit Box.
  keys.push({
    pubkey: resolvedAccounts.safetyDepositBox,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.safetyDepositBox, false),
  });

  // Vault.
  keys.push({
    pubkey: resolvedAccounts.vault,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.vault, false),
  });

  // New Metadata Update Authority.
  keys.push({
    pubkey: resolvedAccounts.newMetadataUpdateAuthority,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.newMetadataUpdateAuthority, false),
  });

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, false),
  });

  // Token Program.
  keys.push({
    pubkey: resolvedAccounts.tokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenProgram, false),
  });

  // Token Vault Program.
  keys.push({
    pubkey: resolvedAccounts.tokenVaultProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenVaultProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Rent (optional).
  if (resolvedAccounts.rent) {
    keys.push({
      pubkey: resolvedAccounts.rent,
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.rent, false),
    });
  }

  // Data.
  const data =
    getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataSerializer(
      context
    ).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}