/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Option,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Reservation,
  ReservationArgs,
  getReservationSerializer,
} from '../types';

// Accounts.
export type DeprecatedSetReservationListInstructionAccounts = {
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey;
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: PublicKey;
  /** The resource you tied the reservation list too */
  resource: Signer;
};

// Data.
export type DeprecatedSetReservationListInstructionData = {
  discriminator: number;
  reservations: Array<Reservation>;
  totalReservationSpots: Option<bigint>;
  offset: bigint;
  totalSpotOffset: bigint;
};

export type DeprecatedSetReservationListInstructionDataArgs = {
  reservations: Array<ReservationArgs>;
  totalReservationSpots: Option<number | bigint>;
  offset: number | bigint;
  totalSpotOffset: number | bigint;
};

export function getDeprecatedSetReservationListInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedSetReservationListInstructionDataArgs,
  DeprecatedSetReservationListInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedSetReservationListInstructionDataArgs,
    DeprecatedSetReservationListInstructionData,
    DeprecatedSetReservationListInstructionData
  >(
    s.struct<DeprecatedSetReservationListInstructionData>(
      [
        ['discriminator', s.u8()],
        ['reservations', s.array(getReservationSerializer(context))],
        ['totalReservationSpots', s.option(s.u64())],
        ['offset', s.u64()],
        ['totalSpotOffset', s.u64()],
      ],
      { description: 'DeprecatedSetReservationListInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 5,
      } as DeprecatedSetReservationListInstructionData)
  ) as Serializer<
    DeprecatedSetReservationListInstructionDataArgs,
    DeprecatedSetReservationListInstructionData
  >;
}

// Args.
export type DeprecatedSetReservationListInstructionArgs =
  DeprecatedSetReservationListInstructionDataArgs;

// Instruction.
export function deprecatedSetReservationList(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: DeprecatedSetReservationListInstructionAccounts &
    DeprecatedSetReservationListInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvedAccounts: any = { ...input };
  const resolvedArgs: any = { ...input };

  // Master Edition.
  keys.push({
    pubkey: resolvedAccounts.masterEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, true),
  });

  // Reservation List.
  keys.push({
    pubkey: resolvedAccounts.reservationList,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.reservationList, true),
  });

  // Resource.
  signers.push(resolvedAccounts.resource);
  keys.push({
    pubkey: resolvedAccounts.resource.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.resource, false),
  });

  // Data.
  const data =
    getDeprecatedSetReservationListInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
