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
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  string,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  Operation,
  OperationArgs,
  Payload,
  PayloadArgs,
  getOperationSerializer,
  getPayloadSerializer,
} from '../types';

// Accounts.
export type ValidateInstructionAccounts = {
  /** Payer and creator of the RuleSet */
  payer?: Signer;
  /** The PDA account where the RuleSet is stored */
  ruleSet: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  optRuleSigner1?: PublicKey | Pda | Signer;
  /** Optional rule validation signer 2 */
  optRuleSigner2?: Signer;
  /** Optional rule validation signer 3 */
  optRuleSigner3?: Signer;
  /** Optional rule validation signer 4 */
  optRuleSigner4?: Signer;
  /** Optional rule validation signer 5 */
  optRuleSigner5?: Signer;
  /** Optional rule validation non-signer 1 */
  optRuleNonsigner1?: PublicKey | Pda;
  /** Optional rule validation non-signer 2 */
  optRuleNonsigner2?: PublicKey | Pda;
  /** Optional rule validation non-signer 3 */
  optRuleNonsigner3?: PublicKey | Pda;
  /** Optional rule validation non-signer 4 */
  optRuleNonsigner4?: PublicKey | Pda;
  /** Optional rule validation non-signer 5 */
  optRuleNonsigner5?: PublicKey | Pda;
};

// Data.
export type ValidateInstructionData = {
  discriminator: number;
  ruleSetName: string;
  operation: Operation;
  payload: Payload;
};

export type ValidateInstructionDataArgs = {
  ruleSetName: string;
  operation: OperationArgs;
  payload: PayloadArgs;
};

/** @deprecated Use `getValidateInstructionDataSerializer()` without any argument instead. */
export function getValidateInstructionDataSerializer(
  _context: object
): Serializer<ValidateInstructionDataArgs, ValidateInstructionData>;
export function getValidateInstructionDataSerializer(): Serializer<
  ValidateInstructionDataArgs,
  ValidateInstructionData
>;
export function getValidateInstructionDataSerializer(
  _context: object = {}
): Serializer<ValidateInstructionDataArgs, ValidateInstructionData> {
  return mapSerializer<
    ValidateInstructionDataArgs,
    any,
    ValidateInstructionData
  >(
    struct<ValidateInstructionData>(
      [
        ['discriminator', u8()],
        ['ruleSetName', string()],
        ['operation', getOperationSerializer()],
        ['payload', getPayloadSerializer()],
      ],
      { description: 'ValidateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 })
  ) as Serializer<ValidateInstructionDataArgs, ValidateInstructionData>;
}

// Args.
export type ValidateInstructionArgs = ValidateInstructionDataArgs;

// Instruction.
export function validate(
  context: Pick<Context, 'programs' | 'payer'>,
  input: ValidateInstructionAccounts & ValidateInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenAuthRules',
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    ruleSet: [input.ruleSet, true] as const,
    optRuleSigner1: [input.optRuleSigner1, false] as const,
    optRuleSigner2: [input.optRuleSigner2, false] as const,
    optRuleSigner3: [input.optRuleSigner3, false] as const,
    optRuleSigner4: [input.optRuleSigner4, false] as const,
    optRuleSigner5: [input.optRuleSigner5, false] as const,
    optRuleNonsigner1: [input.optRuleNonsigner1, false] as const,
    optRuleNonsigner2: [input.optRuleNonsigner2, false] as const,
    optRuleNonsigner3: [input.optRuleNonsigner3, false] as const,
    optRuleNonsigner4: [input.optRuleNonsigner4, false] as const,
    optRuleNonsigner5: [input.optRuleNonsigner5, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.ruleSet, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleSigner1, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleSigner2, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleSigner3, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleSigner4, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleSigner5, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleNonsigner1, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleNonsigner2, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleNonsigner3, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleNonsigner4, true);
  addAccountMeta(keys, signers, resolvedAccounts.optRuleNonsigner5, true);

  // Data.
  const data = getValidateInstructionDataSerializer().serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
