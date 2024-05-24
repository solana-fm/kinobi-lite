import type { IdlAccount } from './IdlAccount';
import type { IdlDefinedType } from './IdlDefinedType';
import type { IdlError } from './IdlError';
import { IdlEvent } from './IdlEvent';
import type { IdlInstruction } from './IdlInstruction';

export type Idl = {
  version: string;
  name: string;
  instructions: IdlInstruction[];
  accounts?: IdlAccount[];
  errors?: IdlError[];
  types?: IdlDefinedType[];
  // Directly Copied from Anchor to support rudimentary version of events parsing with native Rust Support
  events?: IdlEvent[];
  metadata: {
    address: string;
    origin?: 'anchor' | 'shank';
    binaryVersion?: string;
    libVersion?: string;
  };
};
