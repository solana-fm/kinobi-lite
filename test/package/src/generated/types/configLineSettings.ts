/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Serializer,
  bool,
  string,
  struct,
  u32,
} from '@metaplex-foundation/umi/serializers';

/** Config line settings to allocate space for individual name + URI. */
export type ConfigLineSettings = {
  /** Common name prefix */
  prefixName: string;
  /** Length of the remaining part of the name */
  nameLength: number;
  /** Common URI prefix */
  prefixUri: string;
  /** Length of the remaining part of the URI */
  uriLength: number;
  /** Indicates whether to use a senquential index generator or not */
  isSequential: boolean;
};

export type ConfigLineSettingsArgs = ConfigLineSettings;

/** @deprecated Use `getConfigLineSettingsSerializer()` without any argument instead. */
export function getConfigLineSettingsSerializer(
  _context: object
): Serializer<ConfigLineSettingsArgs, ConfigLineSettings>;
export function getConfigLineSettingsSerializer(): Serializer<
  ConfigLineSettingsArgs,
  ConfigLineSettings
>;
export function getConfigLineSettingsSerializer(
  _context: object = {}
): Serializer<ConfigLineSettingsArgs, ConfigLineSettings> {
  return struct<ConfigLineSettings>(
    [
      ['prefixName', string()],
      ['nameLength', u32()],
      ['prefixUri', string()],
      ['uriLength', u32()],
      ['isSequential', bool()],
    ],
    { description: 'ConfigLineSettings' }
  ) as Serializer<ConfigLineSettingsArgs, ConfigLineSettings>;
}
