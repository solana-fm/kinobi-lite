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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsSerializer,
} from '../types';

// Accounts.
export type CreateMasterEditionInstructionAccounts = {
  /** Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: PublicKey | Pda;
  /** Metadata mint */
  mint: PublicKey | Pda;
  /** Update authority */
  updateAuthority: Signer;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type CreateMasterEditionInstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type CreateMasterEditionInstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

/** @deprecated Use `getCreateMasterEditionInstructionDataSerializer()` without any argument instead. */
export function getCreateMasterEditionInstructionDataSerializer(
  _context: object
): Serializer<
  CreateMasterEditionInstructionDataArgs,
  CreateMasterEditionInstructionData
>;
export function getCreateMasterEditionInstructionDataSerializer(): Serializer<
  CreateMasterEditionInstructionDataArgs,
  CreateMasterEditionInstructionData
>;
export function getCreateMasterEditionInstructionDataSerializer(
  _context: object = {}
): Serializer<
  CreateMasterEditionInstructionDataArgs,
  CreateMasterEditionInstructionData
> {
  return mapSerializer<
    CreateMasterEditionInstructionDataArgs,
    any,
    CreateMasterEditionInstructionData
  >(
    struct<CreateMasterEditionInstructionData>(
      [
        ['discriminator', u8()],
        ['createMasterEditionArgs', getCreateMasterEditionArgsSerializer()],
      ],
      { description: 'CreateMasterEditionInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 10 })
  ) as Serializer<
    CreateMasterEditionInstructionDataArgs,
    CreateMasterEditionInstructionData
  >;
}

// Args.
export type CreateMasterEditionInstructionArgs =
  CreateMasterEditionInstructionDataArgs;

// Instruction.
export function createMasterEdition(
  context: Pick<Context, 'programs' | 'payer'>,
  input: CreateMasterEditionInstructionAccounts &
    CreateMasterEditionInstructionArgs
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
    edition: [input.edition, true] as const,
    mint: [input.mint, true] as const,
    updateAuthority: [input.updateAuthority, false] as const,
    mintAuthority: [input.mintAuthority, false] as const,
    metadata: [input.metadata, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenProgram',
    input.tokenProgram
      ? ([input.tokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'rent',
    input.rent
      ? ([input.rent, false] as const)
      : ([
          publicKey('SysvarRent111111111111111111111111111111111'),
          false,
        ] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.updateAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.mintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.rent, false);

  // Data.
  const data =
    getCreateMasterEditionInstructionDataSerializer().serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
