/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import {
  Serializer,
  publicKey as publicKeySerializer,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';

export type Reservation = {
  address: PublicKey;
  spotsRemaining: bigint;
  totalSpots: bigint;
};

export type ReservationArgs = {
  address: PublicKey;
  spotsRemaining: number | bigint;
  totalSpots: number | bigint;
};

/** @deprecated Use `getReservationSerializer()` without any argument instead. */
export function getReservationSerializer(
  _context: object
): Serializer<ReservationArgs, Reservation>;
export function getReservationSerializer(): Serializer<
  ReservationArgs,
  Reservation
>;
export function getReservationSerializer(
  _context: object = {}
): Serializer<ReservationArgs, Reservation> {
  return struct<Reservation>(
    [
      ['address', publicKeySerializer()],
      ['spotsRemaining', u64()],
      ['totalSpots', u64()],
    ],
    { description: 'Reservation' }
  ) as Serializer<ReservationArgs, Reservation>;
}
