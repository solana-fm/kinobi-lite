/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@lorisleiva/js-core';

export enum VerifyArgs {
  V1,
}

export function getVerifyArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<VerifyArgs> {
  const s = context.serializer;
  return s.enum<VerifyArgs>(VerifyArgs, 'VerifyArgs');
}
