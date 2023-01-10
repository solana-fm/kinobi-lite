/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  DateTime,
  DateTimeInput,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  mapDateTimeSerializer,
} from '@lorisleiva/js-core';

export type DelegateArgs =
  | { __kind: 'CollectionV1' }
  | { __kind: 'SaleV1'; amount: DateTime }
  | { __kind: 'TransferV1'; amount: bigint };

export type DelegateArgsArgs =
  | { __kind: 'CollectionV1' }
  | { __kind: 'SaleV1'; amount: DateTimeInput }
  | { __kind: 'TransferV1'; amount: number | bigint };

export function getDelegateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<DelegateArgsArgs, DelegateArgs> {
  const s = context.serializer;
  return s.dataEnum<DelegateArgs>(
    [
      ['CollectionV1', s.unit],
      [
        'SaleV1',
        s.struct<GetDataEnumKindContent<DelegateArgs, 'SaleV1'>>(
          [['amount', mapDateTimeSerializer(s.u64)]],
          'SaleV1'
        ),
      ],
      [
        'TransferV1',
        s.struct<GetDataEnumKindContent<DelegateArgs, 'TransferV1'>>(
          [['amount', s.u64]],
          'TransferV1'
        ),
      ],
    ],
    'DelegateArgs'
  ) as Serializer<DelegateArgsArgs, DelegateArgs>;
}

// Data Enum Helpers.
export function delegateArgs(
  kind: 'CollectionV1'
): GetDataEnumKind<DelegateArgs, 'CollectionV1'>;
export function delegateArgs(
  kind: 'SaleV1',
  data: GetDataEnumKindContent<DelegateArgs, 'SaleV1'>
): GetDataEnumKind<DelegateArgs, 'SaleV1'>;
export function delegateArgs(
  kind: 'TransferV1',
  data: GetDataEnumKindContent<DelegateArgs, 'TransferV1'>
): GetDataEnumKind<DelegateArgs, 'TransferV1'>;
export function delegateArgs<K extends DelegateArgs['__kind']>(
  kind: K,
  data?: any
): DelegateArgs & { __kind: K } {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isDelegateArgs<K extends DelegateArgs['__kind']>(
  kind: K,
  value: DelegateArgs
): value is DelegateArgs & { __kind: K } {
  return value.__kind === kind;
}
