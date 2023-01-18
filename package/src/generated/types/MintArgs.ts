/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Option,
  Serializer,
} from '@lorisleiva/js-core';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataSerializer,
} from '.';

export type MintArgs = {
  __kind: 'V1';
  amount: bigint;
  authorization_data: Option<AuthorizationData>;
};

export type MintArgsArgs = {
  __kind: 'V1';
  amount: number | bigint;
  authorization_data: Option<AuthorizationDataArgs>;
};

export function getMintArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MintArgsArgs, MintArgs> {
  const s = context.serializer;
  return s.dataEnum<MintArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<MintArgs, 'V1'>>(
          [
            ['amount', s.u64],
            [
              'authorization_data',
              s.option(getAuthorizationDataSerializer(context)),
            ],
          ],
          'V1'
        ),
      ],
    ],
    undefined,
    'MintArgs'
  ) as Serializer<MintArgsArgs, MintArgs>;
}

// Data Enum Helpers.
export function mintArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<MintArgs, 'V1'>
): GetDataEnumKind<MintArgs, 'V1'>;
export function mintArgs<K extends MintArgs['__kind']>(
  kind: K,
  data?: any
): MintArgs & { __kind: K } {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isMintArgs<K extends MintArgs['__kind']>(
  kind: K,
  value: MintArgs
): value is MintArgs & { __kind: K } {
  return value.__kind === kind;
}
