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
  Serializer,
  assertAccountExists,
  deserializeAccount,
  mapSerializer,
} from '@lorisleiva/js-core';
import { TmKey, getTmKeySerializer } from '../types';

export type Edition = Account<EditionAccountData>;

export type EditionAccountData = {
  key: TmKey;
  parent: PublicKey;
  edition: bigint;
};

export type EditionAccountArgs = {
  parent: PublicKey;
  edition: number | bigint;
};

export async function fetchEdition(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Edition> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'Edition');
  return deserializeEdition(context, maybeAccount);
}

export async function safeFetchEdition(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Edition | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists ? deserializeEdition(context, maybeAccount) : null;
}

export function deserializeEdition(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): Edition {
  return deserializeAccount(
    rawAccount,
    getEditionAccountDataSerializer(context)
  );
}

export function getEditionAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<EditionAccountArgs, EditionAccountData> {
  const s = context.serializer;
  return mapSerializer<
    EditionAccountArgs,
    EditionAccountData,
    EditionAccountData
  >(
    s.struct<EditionAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['parent', s.publicKey],
        ['edition', s.u64],
      ],
      'Edition'
    ),
    (value) => ({ key: 1, ...value } as EditionAccountData)
  ) as Serializer<EditionAccountArgs, EditionAccountData>;
}

export function getEditionSize(): number {
  return 41;
}
