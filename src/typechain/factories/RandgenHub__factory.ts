/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { RandgenHub, RandgenHubInterface } from "../RandgenHub";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contractID",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "errorCode",
        type: "uint16",
      },
    ],
    name: "GeneralError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fheKeySetID",
        type: "uint256",
      },
    ],
    name: "FheKeysReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
    ],
    name: "FheKeysRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ISubnetController",
        name: "subnetController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract RandgenSubnetRound",
        name: "randgenSubnetRound",
        type: "address",
      },
    ],
    name: "Setup",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fcnSubnetID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fdnSubnetID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "callbackGasLimitFCN",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "callbackGasLimitFDN",
        type: "uint128",
      },
    ],
    name: "SetupFHE",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "roundNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "Vote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "hotWallet",
        type: "address",
      },
    ],
    name: "VoterLinked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "hotWallet",
        type: "address",
      },
    ],
    name: "VoterUnlinkd",
    type: "event",
  },
  {
    inputs: [],
    name: "fheKeySetID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hotWallet",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hotWallet",
        type: "address",
      },
    ],
    name: "hotWalletToVoter",
    outputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initFirstRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hotWallet",
        type: "address",
      },
    ],
    name: "isVoterReady",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mySubnetID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "serviceFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasFee",
        type: "uint256",
      },
    ],
    name: "onFeeReceived",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "serviceID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
    ],
    name: "onServiceCancelled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subnetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "serviceID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "outputs",
        type: "bytes",
      },
    ],
    name: "onServiceCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "serviceID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint128",
        name: "callbackGasLimit",
        type: "uint128",
      },
    ],
    name: "onServiceRequested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refreshFheKeys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voterWallet",
        type: "address",
      },
    ],
    name: "registerVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mySubnetID",
        type: "uint256",
      },
      {
        internalType: "contract ISubnetController",
        name: "_subnetController",
        type: "address",
      },
      {
        internalType: "contract RandgenSubnetRound",
        name: "_randgenSubnetRound",
        type: "address",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fcnSubnetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fdnSubnetID",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_callbackGasLimitFCN",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_callbackGasLimitFDN",
        type: "uint128",
      },
    ],
    name: "setupFHE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "num",
        type: "bytes",
      },
    ],
    name: "submitRandomCt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class RandgenHub__factory {
  static readonly abi = _abi;
  static createInterface(): RandgenHubInterface {
    return new Interface(_abi) as RandgenHubInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): RandgenHub {
    return new Contract(address, _abi, runner) as unknown as RandgenHub;
  }
}
