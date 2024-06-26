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
  array,
  option,
  string,
  struct,
  u16,
} from '@metaplex-foundation/umi/serializers';
import {
  Collection,
  CollectionArgs,
  Creator,
  CreatorArgs,
  Uses,
  UsesArgs,
  getCollectionSerializer,
  getCreatorSerializer,
  getUsesSerializer,
} from '.';

export type DataV2 = {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<Creator>>;
  collection: Option<Collection>;
  uses: Option<Uses>;
};

export type DataV2Args = {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: OptionOrNullable<Array<CreatorArgs>>;
  collection: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
};

/** @deprecated Use `getDataV2Serializer()` without any argument instead. */
export function getDataV2Serializer(
  _context: object
): Serializer<DataV2Args, DataV2>;
export function getDataV2Serializer(): Serializer<DataV2Args, DataV2>;
export function getDataV2Serializer(
  _context: object = {}
): Serializer<DataV2Args, DataV2> {
  return struct<DataV2>(
    [
      ['name', string()],
      ['symbol', string()],
      ['uri', string()],
      ['sellerFeeBasisPoints', u16()],
      ['creators', option(array(getCreatorSerializer()))],
      ['collection', option(getCollectionSerializer())],
      ['uses', option(getUsesSerializer())],
    ],
    { description: 'DataV2' }
  ) as Serializer<DataV2Args, DataV2>;
}
