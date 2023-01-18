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
import { UpdateArgs, UpdateArgsArgs, getUpdateArgsSerializer } from '../types';

// Accounts.
export type UpdateDigitalAssetInstructionAccounts = {
  /** Update authority or delegate */
  authority?: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** Master Edition account */
  masterEdition?: PublicKey;
  /** Mint account */
  mint: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** System program */
  sysvarInstructions?: PublicKey;
  /** Token account */
  token?: PublicKey;
  /** Delegate record PDA */
  delegateRecord?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Arguments.
export type UpdateDigitalAssetInstructionData = {
  discriminator: number;
  updateArgs: UpdateArgs;
};

export type UpdateDigitalAssetInstructionArgs = { updateArgs: UpdateArgsArgs };

export function getUpdateDigitalAssetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UpdateDigitalAssetInstructionArgs,
  UpdateDigitalAssetInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UpdateDigitalAssetInstructionArgs,
    UpdateDigitalAssetInstructionData,
    UpdateDigitalAssetInstructionData
  >(
    s.struct<UpdateDigitalAssetInstructionData>(
      [
        ['discriminator', s.u8],
        ['updateArgs', getUpdateArgsSerializer(context)],
      ],
      'UpdateInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 43, ...value } as UpdateDigitalAssetInstructionData)
  ) as Serializer<
    UpdateDigitalAssetInstructionArgs,
    UpdateDigitalAssetInstructionData
  >;
}

// Instruction.
export function updateDigitalAsset(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    identity: Context['identity'];
    programs?: Context['programs'];
  },
  input: UpdateDigitalAssetInstructionAccounts &
    UpdateDigitalAssetInstructionArgs
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
  const authorityAccount = input.authority ?? context.identity.publicKey;
  const metadataAccount = input.metadata;
  const masterEditionAccount = input.masterEdition;
  const mintAccount = input.mint;
  const systemProgramAccount = input.systemProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const sysvarInstructionsAccount =
    input.sysvarInstructions ??
    publicKey('Sysvar1nstructions1111111111111111111111111');
  const tokenAccount = input.token;
  const delegateRecordAccount = input.delegateRecord;
  const authorizationRulesProgramAccount = input.authorizationRulesProgram;
  const authorizationRulesAccount = input.authorizationRules;

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Master Edition (optional).
  if (masterEditionAccount) {
    keys.push({
      pubkey: masterEditionAccount,
      isSigner: false,
      isWritable: isWritable(masterEditionAccount, true),
    });
  }

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: sysvarInstructionsAccount,
    isSigner: false,
    isWritable: isWritable(sysvarInstructionsAccount, false),
  });

  // Token (optional).
  if (tokenAccount) {
    keys.push({
      pubkey: tokenAccount,
      isSigner: false,
      isWritable: isWritable(tokenAccount, false),
    });
  }

  // Delegate Record (optional).
  if (delegateRecordAccount) {
    keys.push({
      pubkey: delegateRecordAccount,
      isSigner: false,
      isWritable: isWritable(delegateRecordAccount, false),
    });
  }

  // Authorization Rules Program (optional).
  if (authorizationRulesProgramAccount) {
    keys.push({
      pubkey: authorizationRulesProgramAccount,
      isSigner: false,
      isWritable: isWritable(authorizationRulesProgramAccount, false),
    });
  }

  // Authorization Rules (optional).
  if (authorizationRulesAccount) {
    keys.push({
      pubkey: authorizationRulesAccount,
      isSigner: false,
      isWritable: isWritable(authorizationRulesAccount, false),
    });
  }

  // Data.
  const data =
    getUpdateDigitalAssetInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
