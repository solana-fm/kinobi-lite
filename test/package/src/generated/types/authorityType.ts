/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum AuthorityType {
  Metadata,
  Delegate,
  Holder,
  Other,
}

export type AuthorityTypeArgs = AuthorityType;

/** @deprecated Use `getAuthorityTypeSerializer()` without any argument instead. */
export function getAuthorityTypeSerializer(
  _context: object
): Serializer<AuthorityTypeArgs, AuthorityType>;
export function getAuthorityTypeSerializer(): Serializer<
  AuthorityTypeArgs,
  AuthorityType
>;
export function getAuthorityTypeSerializer(
  _context: object = {}
): Serializer<AuthorityTypeArgs, AuthorityType> {
  return scalarEnum<AuthorityType>(AuthorityType, {
    description: 'AuthorityType',
  }) as Serializer<AuthorityTypeArgs, AuthorityType>;
}
