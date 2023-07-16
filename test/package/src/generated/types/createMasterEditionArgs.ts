/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Option, OptionOrNullable } from '@metaplex-foundation/umi';
import {
  Serializer,
  option,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';

export type CreateMasterEditionArgs = { maxSupply: Option<bigint> };

export type CreateMasterEditionArgsArgs = {
  maxSupply: OptionOrNullable<number | bigint>;
};

/** @deprecated Use `getCreateMasterEditionArgsSerializer()` without any argument instead. */
export function getCreateMasterEditionArgsSerializer(
  _context: object
): Serializer<CreateMasterEditionArgsArgs, CreateMasterEditionArgs>;
export function getCreateMasterEditionArgsSerializer(): Serializer<
  CreateMasterEditionArgsArgs,
  CreateMasterEditionArgs
>;
export function getCreateMasterEditionArgsSerializer(
  _context: object = {}
): Serializer<CreateMasterEditionArgsArgs, CreateMasterEditionArgs> {
  return struct<CreateMasterEditionArgs>([['maxSupply', option(u64())]], {
    description: 'CreateMasterEditionArgs',
  }) as Serializer<CreateMasterEditionArgsArgs, CreateMasterEditionArgs>;
}
