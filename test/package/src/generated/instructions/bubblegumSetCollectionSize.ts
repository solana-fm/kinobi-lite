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
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta } from '../shared';
import {
  SetCollectionSizeArgs,
  SetCollectionSizeArgsArgs,
  getSetCollectionSizeArgsSerializer,
} from '../types';

// Accounts.
export type BubblegumSetCollectionSizeInstructionAccounts = {
  /** Collection Metadata account */
  collectionMetadata: PublicKey | Pda;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Signing PDA of Bubblegum program */
  bubblegumSigner: Signer;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey | Pda;
};

// Data.
export type BubblegumSetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};

export type BubblegumSetCollectionSizeInstructionDataArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

/** @deprecated Use `getBubblegumSetCollectionSizeInstructionDataSerializer()` without any argument instead. */
export function getBubblegumSetCollectionSizeInstructionDataSerializer(
  _context: object
): Serializer<
  BubblegumSetCollectionSizeInstructionDataArgs,
  BubblegumSetCollectionSizeInstructionData
>;
export function getBubblegumSetCollectionSizeInstructionDataSerializer(): Serializer<
  BubblegumSetCollectionSizeInstructionDataArgs,
  BubblegumSetCollectionSizeInstructionData
>;
export function getBubblegumSetCollectionSizeInstructionDataSerializer(
  _context: object = {}
): Serializer<
  BubblegumSetCollectionSizeInstructionDataArgs,
  BubblegumSetCollectionSizeInstructionData
> {
  return mapSerializer<
    BubblegumSetCollectionSizeInstructionDataArgs,
    any,
    BubblegumSetCollectionSizeInstructionData
  >(
    struct<BubblegumSetCollectionSizeInstructionData>(
      [
        ['discriminator', u8()],
        ['setCollectionSizeArgs', getSetCollectionSizeArgsSerializer()],
      ],
      { description: 'BubblegumSetCollectionSizeInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 36 })
  ) as Serializer<
    BubblegumSetCollectionSizeInstructionDataArgs,
    BubblegumSetCollectionSizeInstructionData
  >;
}

// Args.
export type BubblegumSetCollectionSizeInstructionArgs =
  BubblegumSetCollectionSizeInstructionDataArgs;

// Instruction.
export function bubblegumSetCollectionSize(
  context: Pick<Context, 'programs'>,
  input: BubblegumSetCollectionSizeInstructionAccounts &
    BubblegumSetCollectionSizeInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    collectionMetadata: [input.collectionMetadata, true] as const,
    collectionAuthority: [input.collectionAuthority, true] as const,
    collectionMint: [input.collectionMint, false] as const,
    bubblegumSigner: [input.bubblegumSigner, false] as const,
    collectionAuthorityRecord: [
      input.collectionAuthorityRecord,
      false,
    ] as const,
  };
  const resolvingArgs = {};
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.bubblegumSigner, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionAuthorityRecord,
    true
  );

  // Data.
  const data =
    getBubblegumSetCollectionSizeInstructionDataSerializer().serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
