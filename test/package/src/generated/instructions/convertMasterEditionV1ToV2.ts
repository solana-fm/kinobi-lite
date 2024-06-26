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

// Accounts.
export type ConvertMasterEditionV1ToV2InstructionAccounts = {
  /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: PublicKey | Pda;
  /** One time authorization mint */
  oneTimeAuth: PublicKey | Pda;
  /** Printing mint */
  printingMint: PublicKey | Pda;
};

// Data.
export type ConvertMasterEditionV1ToV2InstructionData = {
  discriminator: number;
};

export type ConvertMasterEditionV1ToV2InstructionDataArgs = {};

/** @deprecated Use `getConvertMasterEditionV1ToV2InstructionDataSerializer()` without any argument instead. */
export function getConvertMasterEditionV1ToV2InstructionDataSerializer(
  _context: object
): Serializer<
  ConvertMasterEditionV1ToV2InstructionDataArgs,
  ConvertMasterEditionV1ToV2InstructionData
>;
export function getConvertMasterEditionV1ToV2InstructionDataSerializer(): Serializer<
  ConvertMasterEditionV1ToV2InstructionDataArgs,
  ConvertMasterEditionV1ToV2InstructionData
>;
export function getConvertMasterEditionV1ToV2InstructionDataSerializer(
  _context: object = {}
): Serializer<
  ConvertMasterEditionV1ToV2InstructionDataArgs,
  ConvertMasterEditionV1ToV2InstructionData
> {
  return mapSerializer<
    ConvertMasterEditionV1ToV2InstructionDataArgs,
    any,
    ConvertMasterEditionV1ToV2InstructionData
  >(
    struct<ConvertMasterEditionV1ToV2InstructionData>(
      [['discriminator', u8()]],
      { description: 'ConvertMasterEditionV1ToV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 12 })
  ) as Serializer<
    ConvertMasterEditionV1ToV2InstructionDataArgs,
    ConvertMasterEditionV1ToV2InstructionData
  >;
}

// Instruction.
export function convertMasterEditionV1ToV2(
  context: Pick<Context, 'programs'>,
  input: ConvertMasterEditionV1ToV2InstructionAccounts
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
    masterEdition: [input.masterEdition, true] as const,
    oneTimeAuth: [input.oneTimeAuth, true] as const,
    printingMint: [input.printingMint, true] as const,
  };

  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.oneTimeAuth, false);
  addAccountMeta(keys, signers, resolvedAccounts.printingMint, false);

  // Data.
  const data =
    getConvertMasterEditionV1ToV2InstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
