import { Idl } from "../src/idl";

export const phoenixIdl: Idl = {
  version: "0.2.3",
  name: "phoenix_v1",
  instructions: [
    {
      name: "Swap",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "orderPacket",
          type: {
            defined: "OrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 0
      }
    },
    {
      name: "SwapWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "orderPacket",
          type: {
            defined: "OrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 1
      }
    },
    {
      name: "PlaceLimitOrder",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "orderPacket",
          type: {
            defined: "OrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 2
      }
    },
    {
      name: "PlaceLimitOrderWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "orderPacket",
          type: {
            defined: "OrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 3
      }
    },
    {
      name: "ReduceOrder",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReduceOrderParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 4
      }
    },
    {
      name: "ReduceOrderWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: true,
          isSigner: true
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReduceOrderParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 5
      }
    },
    {
      name: "CancelAllOrders",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 6
      }
    },
    {
      name: "CancelAllOrdersWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 7
      }
    },
    {
      name: "CancelUpTo",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CancelUpToParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 8
      }
    },
    {
      name: "CancelUpToWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CancelUpToParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 9
      }
    },
    {
      name: "CancelMultipleOrdersById",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CancelMultipleOrdersByIdParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 10
      }
    },
    {
      name: "CancelMultipleOrdersByIdWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CancelMultipleOrdersByIdParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 11
      }
    },
    {
      name: "WithdrawFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "withdrawFundsParams",
          type: {
            defined: "WithdrawParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 12
      }
    },
    {
      name: "DepositFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "depositFundsParams",
          type: {
            defined: "DepositParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 13
      }
    },
    {
      name: "RequestSeat",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true
        },
        {
          name: "seat",
          isMut: true,
          isSigner: false
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
          desc: "System program"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 14
      }
    },
    {
      name: "Log",
      accounts: [
        {
          name: "logAuthority",
          isMut: false,
          isSigner: true,
          desc: "Log authority"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 15
      }
    },
    {
      name: "PlaceMultiplePostOnlyOrders",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "multipleOrderPacket",
          type: {
            defined: "MultipleOrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 16
      }
    },
    {
      name: "PlaceMultiplePostOnlyOrdersWithFreeFunds",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: true
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "multipleOrderPacket",
          type: {
            defined: "MultipleOrderPacket"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 17
      }
    },
    {
      name: "InitializeMarket",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketCreator",
          isMut: true,
          isSigner: true,
          desc: "The market_creator account must sign for the creation of new vaults"
        },
        {
          name: "baseMint",
          isMut: false,
          isSigner: false,
          desc: "Base mint account"
        },
        {
          name: "quoteMint",
          isMut: false,
          isSigner: false,
          desc: "Quote mint account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
          desc: "System program"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "initializeParams",
          type: {
            defined: "InitializeParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 100
      }
    },
    {
      name: "ClaimAuthority",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "successor",
          isMut: false,
          isSigner: true,
          desc: "The successor account must sign to claim authority"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 101
      }
    },
    {
      name: "NameSuccessor",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to name successor"
        }
      ],
      args: [
        {
          name: "successor",
          type: "publicKey"
        }
      ],
      discriminant: {
        type: "u8",
        value: 102
      }
    },
    {
      name: "ChangeMarketStatus",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to change market status"
        }
      ],
      args: [
        {
          name: "marketStatus",
          type: {
            defined: "MarketStatus"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 103
      }
    },
    {
      name: "ChangeSeatStatus",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to change seat status"
        },
        {
          name: "seat",
          isMut: true,
          isSigner: false
        }
      ],
      args: [
        {
          name: "approvalStatus",
          type: {
            defined: "SeatApprovalStatus"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 104
      }
    },
    {
      name: "RequestSeatAuthorized",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to request a seat on behalf of a trader"
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true
        },
        {
          name: "trader",
          isMut: false,
          isSigner: false
        },
        {
          name: "seat",
          isMut: true,
          isSigner: false
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
          desc: "System program"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 105
      }
    },
    {
      name: "EvictSeat",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to evict a seat"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: false
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false,
          desc: "The trader's PDA seat account, seeds are [b'seat', market_address, trader_address]"
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 106
      }
    },
    {
      name: "ForceCancelOrders",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to claim authority"
        },
        {
          name: "trader",
          isMut: false,
          isSigner: false
        },
        {
          name: "seat",
          isMut: false,
          isSigner: false,
          desc: "The trader's PDA seat account, seeds are [b'seat', market_address, trader_address]"
        },
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader base token account"
        },
        {
          name: "quoteAccount",
          isMut: true,
          isSigner: false,
          desc: "Trader quote token account"
        },
        {
          name: "baseVault",
          isMut: true,
          isSigner: false,
          desc: "Base vault PDA, seeds are [b'vault', market_address, base_mint_address]"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CancelUpToParams"
          }
        }
      ],
      discriminant: {
        type: "u8",
        value: 107
      }
    },
    {
      name: "CollectFees",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "sweeper",
          isMut: false,
          isSigner: true,
          desc: "Signer of collect fees instruction"
        },
        {
          name: "feeRecipient",
          isMut: true,
          isSigner: false,
          desc: "Fee collector quote token account"
        },
        {
          name: "quoteVault",
          isMut: true,
          isSigner: false,
          desc: "Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]"
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
          desc: "Token program"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 108
      }
    },
    {
      name: "ChangeFeeRecipient",
      accounts: [
        {
          name: "phoenixProgram",
          isMut: false,
          isSigner: false,
          desc: "Phoenix program"
        },
        {
          name: "logAuthority",
          isMut: false,
          isSigner: false,
          desc: "Phoenix log authority"
        },
        {
          name: "market",
          isMut: true,
          isSigner: false,
          desc: "This account holds the market state"
        },
        {
          name: "marketAuthority",
          isMut: false,
          isSigner: true,
          desc: "The market_authority account must sign to change the free recipient"
        },
        {
          name: "newFeeRecipient",
          isMut: false,
          isSigner: false,
          desc: "New fee recipient"
        }
      ],
      args: [],
      discriminant: {
        type: "u8",
        value: 109
      }
    }
  ],
  types: [
    {
      name: "MarketSizeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bidsSize",
            type: "u64"
          },
          {
            name: "asksSize",
            type: "u64"
          },
          {
            name: "numSeats",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "TokenParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "decimals",
            type: "u32"
          },
          {
            name: "vaultBump",
            type: "u32"
          },
          {
            name: "mintKey",
            type: "publicKey"
          },
          {
            name: "vaultKey",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "Seat",
      type: {
        kind: "struct",
        fields: [
          {
            name: "discriminant",
            type: "u64"
          },
          {
            name: "market",
            type: "publicKey"
          },
          {
            name: "trader",
            type: "publicKey"
          },
          {
            name: "approvalStatus",
            type: "u64"
          },
          {
            name: "padding",
            type: {
              array: [
                "u64",
                6
              ]
            }
          }
        ]
      }
    },
    {
      name: "AuditLogHeader",
      type: {
        kind: "struct",
        fields: [
          {
            name: "instruction",
            type: "u8"
          },
          {
            name: "sequenceNumber",
            type: "u64"
          },
          {
            name: "timestamp",
            type: "i64"
          },
          {
            name: "slot",
            type: "u64"
          },
          {
            name: "market",
            type: "publicKey"
          },
          {
            name: "signer",
            type: "publicKey"
          },
          {
            name: "totalEvents",
            type: "u16"
          }
        ]
      }
    },
    {
      name: "FillEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "makerId",
            type: "publicKey"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "baseLotsFilled",
            type: "u64"
          },
          {
            name: "baseLotsRemaining",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "ReduceEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "baseLotsRemoved",
            type: "u64"
          },
          {
            name: "baseLotsRemaining",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "PlaceEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "clientOrderId",
            type: "u128"
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "baseLotsPlaced",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "EvictEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "makerId",
            type: "publicKey"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "baseLotsEvicted",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "FillSummaryEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "clientOrderId",
            type: "u128"
          },
          {
            name: "totalBaseLotsFilled",
            type: "u64"
          },
          {
            name: "totalQuoteLotsFilled",
            type: "u64"
          },
          {
            name: "totalFeeInQuoteLots",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "FeeEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "feesCollectedInQuoteLots",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "TimeInForceEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "lastValidSlot",
            type: "u64"
          },
          {
            name: "lastValidUnixTimestampInSeconds",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "ExpiredOrderEvent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u16"
          },
          {
            name: "makerId",
            type: "publicKey"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "baseLotsRemoved",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "CancelUpToParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "side",
            type: {
              defined: "Side"
            }
          },
          {
            name: "tickLimit",
            type: {
              option: "u64"
            }
          },
          {
            name: "numOrdersToSearch",
            type: {
              option: "u32"
            }
          },
          {
            name: "numOrdersToCancel",
            type: {
              option: "u32"
            }
          }
        ]
      }
    },
    {
      name: "CancelMultipleOrdersByIdParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "orders",
            type: {
              vec: {
                defined: "CancelOrderParams"
              }
            }
          }
        ]
      }
    },
    {
      name: "DepositParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "quoteLotsToDeposit",
            type: "u64"
          },
          {
            name: "baseLotsToDeposit",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "InitializeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "marketSizeParams",
            type: {
              defined: "MarketSizeParams"
            }
          },
          {
            name: "numQuoteLotsPerQuoteUnit",
            type: "u64"
          },
          {
            name: "tickSizeInQuoteLotsPerBaseUnit",
            type: "u64"
          },
          {
            name: "numBaseLotsPerBaseUnit",
            type: "u64"
          },
          {
            name: "takerFeeBps",
            type: "u16"
          },
          {
            name: "feeCollector",
            type: "publicKey"
          },
          {
            name: "rawBaseUnitsPerBaseUnit",
            type: {
              option: "u32"
            }
          }
        ]
      }
    },
    {
      name: "MultipleOrderPacket",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bids",
            type: {
              vec: {
                defined: "CondensedOrder"
              }
            }
          },
          {
            name: "asks",
            type: {
              vec: {
                defined: "CondensedOrder"
              }
            }
          },
          {
            name: "clientOrderId",
            type: {
              option: "u128"
            }
          },
          {
            name: "rejectPostOnly",
            type: "bool"
          }
        ]
      }
    },
    {
      name: "CondensedOrder",
      type: {
        kind: "struct",
        fields: [
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "sizeInBaseLots",
            type: "u64"
          },
          {
            name: "lastValidSlot",
            type: {
              option: "u64"
            }
          },
          {
            name: "lastValidUnixTimestampInSeconds",
            type: {
              option: "u64"
            }
          }
        ]
      }
    },
    {
      name: "CancelOrderParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "side",
            type: {
              defined: "Side"
            }
          },
          {
            name: "priceInTicks",
            type: "u64"
          },
          {
            name: "orderSequenceNumber",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "ReduceOrderParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "baseParams",
            type: {
              defined: "CancelOrderParams"
            }
          },
          {
            name: "size",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "WithdrawParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "quoteLotsToWithdraw",
            type: {
              option: "u64"
            }
          },
          {
            name: "baseLotsToWithdraw",
            type: {
              option: "u64"
            }
          }
        ]
      }
    },
    {
      name: "MarketHeader",
      type: {
        kind: "struct",
        fields: [
          {
            name: "discriminant",
            type: "u64"
          },
          {
            name: "status",
            type: "u64"
          },
          {
            name: "marketSizeParams",
            type: {
              defined: "MarketSizeParams"
            }
          },
          {
            name: "baseParams",
            type: {
              defined: "TokenParams"
            }
          },
          {
            name: "baseLotSize",
            type: "u64"
          },
          {
            name: "quoteParams",
            type: {
              defined: "TokenParams"
            }
          },
          {
            name: "quoteLotSize",
            type: "u64"
          },
          {
            name: "tickSizeInQuoteAtomsPerBaseUnit",
            type: "u64"
          },
          {
            name: "authority",
            type: "publicKey"
          },
          {
            name: "feeRecipient",
            type: "publicKey"
          },
          {
            name: "marketSequenceNumber",
            type: "u64"
          },
          {
            name: "successor",
            type: "publicKey"
          },
          {
            name: "rawBaseUnitsPerBaseUnit",
            type: "u32"
          },
          {
            name: "padding1",
            type: "u32"
          },
          {
            name: "padding2",
            type: {
              array: [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      name: "PhoenixMarketEvent",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Uninitialized"
          },
          {
            name: "Header",
            fields: [
              {
                defined: "AuditLogHeader"
              }
            ]
          },
          {
            name: "Fill",
            fields: [
              {
                defined: "FillEvent"
              }
            ]
          },
          {
            name: "Place",
            fields: [
              {
                defined: "PlaceEvent"
              }
            ]
          },
          {
            name: "Reduce",
            fields: [
              {
                defined: "ReduceEvent"
              }
            ]
          },
          {
            name: "Evict",
            fields: [
              {
                defined: "EvictEvent"
              }
            ]
          },
          {
            name: "FillSummary",
            fields: [
              {
                defined: "FillSummaryEvent"
              }
            ]
          },
          {
            name: "Fee",
            fields: [
              {
                defined: "FeeEvent"
              }
            ]
          },
          {
            name: "TimeInForce",
            fields: [
              {
                defined: "TimeInForceEvent"
              }
            ]
          },
          {
            name: "ExpiredOrder",
            fields: [
              {
                defined: "ExpiredOrderEvent"
              }
            ]
          }
        ]
      }
    },
    {
      name: "MarketStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Uninitialized"
          },
          {
            name: "Active"
          },
          {
            name: "PostOnly"
          },
          {
            name: "Paused"
          },
          {
            name: "Closed"
          },
          {
            name: "Tombstoned"
          }
        ]
      }
    },
    {
      name: "SeatApprovalStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "NotApproved"
          },
          {
            name: "Approved"
          },
          {
            name: "Retired"
          }
        ]
      }
    },
    {
      name: "OrderPacket",
      type: {
        kind: "enum",
        variants: [
          {
            name: "PostOnly",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side"
                }
              },
              {
                name: "price_in_ticks",
                type: "u64"
              },
              {
                name: "num_base_lots",
                type: "u64"
              },
              {
                name: "client_order_id",
                type: "u128"
              },
              {
                name: "reject_post_only",
                type: "bool"
              },
              {
                name: "use_only_deposited_funds",
                type: "bool"
              },
              {
                name: "last_valid_slot",
                type: {
                  option: "u64"
                }
              },
              {
                name: "last_valid_unix_timestamp_in_seconds",
                type: {
                  option: "u64"
                }
              }
            ]
          },
          {
            name: "Limit",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side"
                }
              },
              {
                name: "price_in_ticks",
                type: "u64"
              },
              {
                name: "num_base_lots",
                type: "u64"
              },
              {
                name: "self_trade_behavior",
                type: {
                  defined: "SelfTradeBehavior"
                }
              },
              {
                name: "match_limit",
                type: {
                  option: "u64"
                }
              },
              {
                name: "client_order_id",
                type: "u128"
              },
              {
                name: "use_only_deposited_funds",
                type: "bool"
              },
              {
                name: "last_valid_slot",
                type: {
                  option: "u64"
                }
              },
              {
                name: "last_valid_unix_timestamp_in_seconds",
                type: {
                  option: "u64"
                }
              }
            ]
          },
          {
            name: "ImmediateOrCancel",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side"
                }
              },
              {
                name: "price_in_ticks",
                type: {
                  option: "u64"
                }
              },
              {
                name: "num_base_lots",
                type: "u64"
              },
              {
                name: "num_quote_lots",
                type: "u64"
              },
              {
                name: "min_base_lots_to_fill",
                type: "u64"
              },
              {
                name: "min_quote_lots_to_fill",
                type: "u64"
              },
              {
                name: "self_trade_behavior",
                type: {
                  defined: "SelfTradeBehavior"
                }
              },
              {
                name: "match_limit",
                type: {
                  option: "u64"
                }
              },
              {
                name: "client_order_id",
                type: "u128"
              },
              {
                name: "use_only_deposited_funds",
                type: "bool"
              },
              {
                name: "last_valid_slot",
                type: {
                  option: "u64"
                }
              },
              {
                name: "last_valid_unix_timestamp_in_seconds",
                type: {
                  option: "u64"
                }
              }
            ]
          }
        ]
      }
    },
    {
      name: "Side",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Bid"
          },
          {
            name: "Ask"
          }
        ]
      }
    },
    {
      name: "SelfTradeBehavior",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Abort"
          },
          {
            name: "CancelProvide"
          },
          {
            name: "DecrementTake"
          }
        ]
      }
    }
  ],
  errors: [
    {
      code: 0,
      name: "InvalidMarketParameters",
      msg: "Invalid market parameters error"
    },
    {
      code: 1,
      name: "InvalidMarketAuthority",
      msg: "Invalid market authority error"
    },
    {
      code: 2,
      name: "FailedToLoadMarketFromAccount",
      msg: "Market deserialization error"
    },
    {
      code: 3,
      name: "MarketAlreadyInitialized",
      msg: "Market already initialized error"
    },
    {
      code: 4,
      name: "MarketUninitialized",
      msg: "Market is not initialized error"
    },
    {
      code: 5,
      name: "InvalidStateTransition",
      msg: "Invalid state transition error"
    },
    {
      code: 6,
      name: "InvalidMarketSigner",
      msg: "Invalid market signer error"
    },
    {
      code: 7,
      name: "InvalidLotSize",
      msg: "Invalid lot size error"
    },
    {
      code: 8,
      name: "InvalidTickSize",
      msg: "Invalid tick size error"
    },
    {
      code: 9,
      name: "InvalidMint",
      msg: "Invalid mint error"
    },
    {
      code: 10,
      name: "InvalidBaseVault",
      msg: "Invalid base vault error"
    },
    {
      code: 11,
      name: "InvalidQuoteVault",
      msg: "Invalid quote vault error"
    },
    {
      code: 12,
      name: "InvalidBaseAccount",
      msg: "Invalid base account error"
    },
    {
      code: 13,
      name: "InvalidQuoteAccount",
      msg: "Invalid quote account error"
    },
    {
      code: 14,
      name: "TooManyEvents",
      msg: "Too many events error"
    },
    {
      code: 15,
      name: "NewOrderError",
      msg: "New order error"
    },
    {
      code: 16,
      name: "ReduceOrderError",
      msg: "Reduce order error"
    },
    {
      code: 17,
      name: "CancelMultipleOrdersError",
      msg: "Cancel multiple orders error"
    },
    {
      code: 18,
      name: "WithdrawFundsError",
      msg: "Withdraw funds error"
    },
    {
      code: 19,
      name: "RemoveEmptyOrdersError",
      msg: "Remove empty orders error"
    },
    {
      code: 20,
      name: "TraderNotFound",
      msg: "Trader not found error"
    },
    {
      code: 21,
      name: "InvalidSeatStatus",
      msg: "Invalid seat status"
    },
    {
      code: 22,
      name: "EvictionError",
      msg: "Failed to evict trader"
    },
    {
      code: 23,
      name: "NonEmptyScratchBuffer",
      msg: "Non empty scratch buffer"
    },
    {
      code: 24,
      name: "FailedToSerializeEvent",
      msg: "Failed to serialize event"
    },
    {
      code: 25,
      name: "FailedToFlushBuffer",
      msg: "Failed to flush buffer"
    }
  ],
  metadata: {
    origin: "shank",
    address: "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY"
  }
}