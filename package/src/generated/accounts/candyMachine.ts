/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@lorisleiva/js-core';
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataSerializer,
} from '../types';

export type CandyMachine = Account<CandyMachineAccountData>;

export type CandyMachineAccountData = {
  discriminator: Array<number>;
  /** Features versioning flags. */
  features: bigint;
  /** Authority address. */
  authority: PublicKey;
  /** Authority address allowed to mint from the candy machine. */
  mintAuthority: PublicKey;
  /** The collection mint for the candy machine. */
  collectionMint: PublicKey;
  /** Number of assets redeemed. */
  itemsRedeemed: bigint;
  /** Candy machine configuration data. */
  data: CandyMachineData;
};

export type CandyMachineAccountArgs = {
  /** Features versioning flags. */
  features: number | bigint;
  /** Authority address. */
  authority: PublicKey;
  /** Authority address allowed to mint from the candy machine. */
  mintAuthority: PublicKey;
  /** The collection mint for the candy machine. */
  collectionMint: PublicKey;
  /** Number of assets redeemed. */
  itemsRedeemed: number | bigint;
  /** Candy machine configuration data. */
  data: CandyMachineDataArgs;
};

export async function fetchCandyMachine(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<CandyMachine> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'CandyMachine');
  return deserializeCandyMachine(context, maybeAccount);
}

export async function safeFetchCandyMachine(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<CandyMachine | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeCandyMachine(context, maybeAccount)
    : null;
}

export async function fetchAllCandyMachine(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<CandyMachine[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'CandyMachine');
    return deserializeCandyMachine(context, maybeAccount);
  });
}

export async function safeFetchAllCandyMachine(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<CandyMachine[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeCandyMachine(context, maybeAccount as RpcAccount)
    );
}

export function getCandyMachineGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  return gpaBuilder<{
    discriminator: Array<number>;
    features: number | bigint;
    authority: PublicKey;
    mintAuthority: PublicKey;
    collectionMint: PublicKey;
    itemsRedeemed: number | bigint;
    data: CandyMachineDataArgs;
  }>(context, context.programs.get('mplCandyMachineCore').publicKey, [
    ['discriminator', s.array(s.u8, 8)],
    ['features', s.u64],
    ['authority', s.publicKey],
    ['mintAuthority', s.publicKey],
    ['collectionMint', s.publicKey],
    ['itemsRedeemed', s.u64],
    ['data', getCandyMachineDataSerializer(context)],
  ]).whereField('discriminator', [115, 157, 18, 166, 35, 44, 221, 13]);
}

export function deserializeCandyMachine(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): CandyMachine {
  return deserializeAccount(
    rawAccount,
    getCandyMachineAccountDataSerializer(context)
  );
}

export function getCandyMachineAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CandyMachineAccountArgs, CandyMachineAccountData> {
  const s = context.serializer;
  return mapSerializer<
    CandyMachineAccountArgs,
    CandyMachineAccountData,
    CandyMachineAccountData
  >(
    s.struct<CandyMachineAccountData>(
      [
        ['discriminator', s.array(s.u8, 8)],
        ['features', s.u64],
        ['authority', s.publicKey],
        ['mintAuthority', s.publicKey],
        ['collectionMint', s.publicKey],
        ['itemsRedeemed', s.u64],
        ['data', getCandyMachineDataSerializer(context)],
      ],
      'CandyMachine'
    ),
    (value) =>
      ({
        ...value,
        discriminator: [115, 157, 18, 166, 35, 44, 221, 13],
      } as CandyMachineAccountData)
  ) as Serializer<CandyMachineAccountArgs, CandyMachineAccountData>;
}

export function getCandyMachineSize(
  context: Pick<Context, 'serializer'>
): number | null {
  return getCandyMachineAccountDataSerializer(context).fixedSize;
}
