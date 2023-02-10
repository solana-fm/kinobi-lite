/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export enum RevokeArgs {
  CollectionV1,
  TransferV1,
  SaleV1,
}

export function getRevokeArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<RevokeArgs> {
  const s = context.serializer;
  return s.enum<RevokeArgs>(RevokeArgs, 'RevokeArgs');
}