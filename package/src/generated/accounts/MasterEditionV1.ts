/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { TmKey, getTmKeySerializer } from '../types';
import {
  Account,
  Context,
  Option,
  PublicKey,
  RpcAccount,
  Serializer,
  assertAccountExists,
  deserializeAccount,
} from '@lorisleiva/js-core';

export type MasterEditionV1 = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};
export type MasterEditionV1Args = {
  key: TmKey;
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};

export async function fetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Account<MasterEditionV1>> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'MasterEditionV1');
  return deserializeMasterEditionV1(context, maybeAccount);
}

export async function safeFetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Account<MasterEditionV1> | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists
    ? deserializeMasterEditionV1(context, maybeAccount)
    : null;
}

export function deserializeMasterEditionV1(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): Account<MasterEditionV1> {
  return deserializeAccount(rawAccount, getMasterEditionV1Serializer(context));
}

export function getMasterEditionV1Serializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV1Args, MasterEditionV1> {
  const s = context.serializer;
  return s.struct<MasterEditionV1>(
    [
      ['key', getTmKeySerializer(context)],
      ['supply', s.u64],
      ['maxSupply', s.option(s.u64)],
      ['printingMint', s.publicKey],
      ['oneTimePrintingAuthorizationMint', s.publicKey],
    ],
    'MasterEditionV1'
  ) as Serializer<MasterEditionV1Args, MasterEditionV1>;
}
