/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, struct, u64 } from '@metaplex-foundation/umi/serializers';

export type MintNewEditionFromMasterEditionViaTokenArgs = { edition: bigint };

export type MintNewEditionFromMasterEditionViaTokenArgsArgs = {
  edition: number | bigint;
};

/** @deprecated Use `getMintNewEditionFromMasterEditionViaTokenArgsSerializer()` without any argument instead. */
export function getMintNewEditionFromMasterEditionViaTokenArgsSerializer(
  _context: object
): Serializer<
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  MintNewEditionFromMasterEditionViaTokenArgs
>;
export function getMintNewEditionFromMasterEditionViaTokenArgsSerializer(): Serializer<
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  MintNewEditionFromMasterEditionViaTokenArgs
>;
export function getMintNewEditionFromMasterEditionViaTokenArgsSerializer(
  _context: object = {}
): Serializer<
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  MintNewEditionFromMasterEditionViaTokenArgs
> {
  return struct<MintNewEditionFromMasterEditionViaTokenArgs>(
    [['edition', u64()]],
    { description: 'MintNewEditionFromMasterEditionViaTokenArgs' }
  ) as Serializer<
    MintNewEditionFromMasterEditionViaTokenArgsArgs,
    MintNewEditionFromMasterEditionViaTokenArgs
  >;
}
