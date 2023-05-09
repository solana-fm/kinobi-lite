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
  PublicKey,
  Serializer,
} from '@metaplex-foundation/umi';

export type EscrowAuthority =
  | { __kind: 'TokenOwner' }
  | { __kind: 'Creator'; fields: [PublicKey] };

export type EscrowAuthorityArgs = EscrowAuthority;

export function getEscrowAuthoritySerializer(
  context: Pick<Context, 'serializer'>
): Serializer<EscrowAuthorityArgs, EscrowAuthority> {
  const s = context.serializer;
  return s.dataEnum<EscrowAuthority>(
    [
      ['TokenOwner', s.unit()],
      [
        'Creator',
        s.struct<GetDataEnumKindContent<EscrowAuthority, 'Creator'>>([
          ['fields', s.tuple([s.publicKey()])],
        ]),
      ],
    ],
    { description: 'EscrowAuthority' }
  ) as Serializer<EscrowAuthorityArgs, EscrowAuthority>;
}

// Data Enum Helpers.
export function escrowAuthority(
  kind: 'TokenOwner'
): GetDataEnumKind<EscrowAuthorityArgs, 'TokenOwner'>;
export function escrowAuthority(
  kind: 'Creator',
  data: GetDataEnumKindContent<EscrowAuthorityArgs, 'Creator'>['fields']
): GetDataEnumKind<EscrowAuthorityArgs, 'Creator'>;
export function escrowAuthority<K extends EscrowAuthorityArgs['__kind']>(
  kind: K,
  data?: any
): Extract<EscrowAuthorityArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isEscrowAuthority<K extends EscrowAuthority['__kind']>(
  kind: K,
  value: EscrowAuthority
): value is EscrowAuthority & { __kind: K } {
  return value.__kind === kind;
}