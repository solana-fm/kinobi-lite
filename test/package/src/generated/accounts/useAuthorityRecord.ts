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
import { TmKey, getTmKeySerializer } from '../types';

export type UseAuthorityRecord = Account<UseAuthorityRecordAccountData>;

export type UseAuthorityRecordAccountData = {
  key: TmKey;
  allowedUses: bigint;
  bump: number;
};

export type UseAuthorityRecordAccountArgs = {
  allowedUses: number | bigint;
  bump: number;
};

export async function fetchUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'UseAuthorityRecord');
  return deserializeUseAuthorityRecord(context, maybeAccount);
}

export async function safeFetchUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeUseAuthorityRecord(context, maybeAccount)
    : null;
}

export async function fetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'UseAuthorityRecord');
    return deserializeUseAuthorityRecord(context, maybeAccount);
  });
}

export async function safeFetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeUseAuthorityRecord(context, maybeAccount as RpcAccount)
    );
}

export function getUseAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.get('mplTokenMetadata').publicKey;
  return gpaBuilder(context, programId)
    .registerFields<{ key: TmKey; allowedUses: number | bigint; bump: number }>(
      [
        ['key', getTmKeySerializer(context)],
        ['allowedUses', s.u64],
        ['bump', s.u8],
      ]
    )
    .deserializeUsing<UseAuthorityRecord>((account) =>
      deserializeUseAuthorityRecord(context, account)
    )
    .whereField('key', TmKey.UseAuthorityRecord);
}

export function deserializeUseAuthorityRecord(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): UseAuthorityRecord {
  return deserializeAccount(
    rawAccount,
    getUseAuthorityRecordAccountDataSerializer(context)
  );
}

export function getUseAuthorityRecordAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UseAuthorityRecordAccountArgs, UseAuthorityRecordAccountData> {
  const s = context.serializer;
  return mapSerializer<
    UseAuthorityRecordAccountArgs,
    UseAuthorityRecordAccountData,
    UseAuthorityRecordAccountData
  >(
    s.struct<UseAuthorityRecordAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['allowedUses', s.u64],
        ['bump', s.u8],
      ],
      'UseAuthorityRecord'
    ),
    (value) =>
      ({
        ...value,
        key: TmKey.UseAuthorityRecord,
      } as UseAuthorityRecordAccountData)
  ) as Serializer<UseAuthorityRecordAccountArgs, UseAuthorityRecordAccountData>;
}

export function getUseAuthorityRecordSize(_context = {}): number {
  return 10;
}
