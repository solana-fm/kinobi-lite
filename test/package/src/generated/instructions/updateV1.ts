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
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  some,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bool,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  string,
  struct,
  u16,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  AuthorityType,
  AuthorityTypeArgs,
  AuthorizationData,
  AuthorizationDataArgs,
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  DelegateStateArgs,
  ProgrammableConfig,
  ProgrammableConfigArgs,
  TokenStandard,
  TokenStandardArgs,
  Uses,
  UsesArgs,
  getAuthorityTypeSerializer,
  getAuthorizationDataSerializer,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
  payloadType,
} from '../types';

// Accounts.
export type UpdateV1InstructionAccounts = {
  /** Update authority or delegate */
  authority?: Signer;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Master Edition account */
  masterEdition?: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** System program */
  sysvarInstructions?: PublicKey | Pda;
  /** Token account */
  token?: PublicKey | Pda;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type UpdateV1InstructionData = {
  discriminator: number;
  updateV1Discriminator: number;
  authorizationData: Option<AuthorizationData>;
  newUpdateAuthority: Option<PublicKey>;
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  }>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
  authorityType: AuthorityType;
};

export type UpdateV1InstructionDataArgs = {
  authorizationData: OptionOrNullable<AuthorizationDataArgs>;
  newUpdateAuthority: OptionOrNullable<PublicKey>;
  data: OptionOrNullable<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  }>;
  primarySaleHappened: OptionOrNullable<boolean>;
  isMutable: OptionOrNullable<boolean>;
  tokenStandard?: OptionOrNullable<TokenStandardArgs>;
  collection?: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
  programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
  delegateState: OptionOrNullable<DelegateStateArgs>;
  authorityType: AuthorityTypeArgs;
};

/** @deprecated Use `getUpdateV1InstructionDataSerializer()` without any argument instead. */
export function getUpdateV1InstructionDataSerializer(
  _context: object
): Serializer<UpdateV1InstructionDataArgs, UpdateV1InstructionData>;
export function getUpdateV1InstructionDataSerializer(): Serializer<
  UpdateV1InstructionDataArgs,
  UpdateV1InstructionData
>;
export function getUpdateV1InstructionDataSerializer(
  _context: object = {}
): Serializer<UpdateV1InstructionDataArgs, UpdateV1InstructionData> {
  return mapSerializer<
    UpdateV1InstructionDataArgs,
    any,
    UpdateV1InstructionData
  >(
    struct<UpdateV1InstructionData>(
      [
        ['discriminator', u8()],
        ['updateV1Discriminator', u8()],
        ['authorizationData', option(getAuthorizationDataSerializer())],
        ['newUpdateAuthority', option(publicKeySerializer())],
        [
          'data',
          option(
            struct<any>([
              ['name', string()],
              ['symbol', string()],
              ['uri', string()],
              ['sellerFeeBasisPoints', u16()],
              ['creators', option(array(getCreatorSerializer()))],
            ])
          ),
        ],
        ['primarySaleHappened', option(bool())],
        ['isMutable', option(bool())],
        ['tokenStandard', option(getTokenStandardSerializer())],
        ['collection', option(getCollectionSerializer())],
        ['uses', option(getUsesSerializer())],
        ['collectionDetails', option(getCollectionDetailsSerializer())],
        ['programmableConfig', option(getProgrammableConfigSerializer())],
        ['delegateState', option(getDelegateStateSerializer())],
        ['authorityType', getAuthorityTypeSerializer()],
      ],
      { description: 'UpdateV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 43,
      updateV1Discriminator: 0,
      tokenStandard: value.tokenStandard ?? some(TokenStandard.NonFungible),
      collection:
        value.collection ??
        some(
          payloadType('Pubkey', [publicKey('11111111111111111111111111111111')])
        ),
    })
  ) as Serializer<UpdateV1InstructionDataArgs, UpdateV1InstructionData>;
}

// Args.
export type UpdateV1InstructionArgs = UpdateV1InstructionDataArgs;

// Instruction.
export function updateV1(
  context: Pick<Context, 'programs' | 'identity'>,
  input: UpdateV1InstructionAccounts & UpdateV1InstructionArgs
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
    metadata: [input.metadata, true] as const,
    mint: [input.mint, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'masterEdition',
    input.masterEdition
      ? ([input.masterEdition, true] as const)
      : ([programId, false] as const)
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
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRulesProgram',
    input.authorizationRulesProgram
      ? ([input.authorizationRulesProgram, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRules',
    input.authorizationRules
      ? ([input.authorizationRules, false] as const)
      : ([programId, false] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.delegateRecord, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.authorizationRulesProgram,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.authorizationRules, false);

  // Data.
  const data = getUpdateV1InstructionDataSerializer().serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
