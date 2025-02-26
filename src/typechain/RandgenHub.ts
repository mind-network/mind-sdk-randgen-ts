/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface RandgenHubInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "fheKeySetID"
      | "hasVoted"
      | "hotWalletToVoter"
      | "initFirstRound"
      | "initialize"
      | "isVoterReady"
      | "mySubnetID"
      | "onFeeReceived"
      | "onServiceCancelled"
      | "onServiceCompleted"
      | "onServiceRequested"
      | "owner"
      | "refreshFheKeys"
      | "registerVoter"
      | "renounceOwnership"
      | "setup"
      | "setupFHE"
      | "submitRandomCt"
      | "supportsInterface"
      | "transferOwnership"
      | "withdrawGas"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FheKeysReceived"
      | "FheKeysRequested"
      | "Initialized"
      | "OwnershipTransferred"
      | "Setup"
      | "SetupFHE"
      | "Vote"
      | "VoterLinked"
      | "VoterUnlinkd"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "fheKeySetID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hotWalletToVoter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initFirstRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isVoterReady",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mySubnetID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onFeeReceived",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onServiceCancelled",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onServiceCompleted",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onServiceRequested",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refreshFheKeys",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerVoter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setupFHE",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRandomCt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawGas",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "fheKeySetID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hotWalletToVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initFirstRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isVoterReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mySubnetID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onFeeReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onServiceCancelled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onServiceCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onServiceRequested",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refreshFheKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setupFHE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitRandomCt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawGas",
    data: BytesLike
  ): Result;
}

export namespace FheKeysReceivedEvent {
  export type InputTuple = [requestID: BigNumberish, fheKeySetID: BigNumberish];
  export type OutputTuple = [requestID: bigint, fheKeySetID: bigint];
  export interface OutputObject {
    requestID: bigint;
    fheKeySetID: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FheKeysRequestedEvent {
  export type InputTuple = [requestID: BigNumberish];
  export type OutputTuple = [requestID: bigint];
  export interface OutputObject {
    requestID: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetupEvent {
  export type InputTuple = [
    subnetController: AddressLike,
    randgenSubnetRound: AddressLike
  ];
  export type OutputTuple = [
    subnetController: string,
    randgenSubnetRound: string
  ];
  export interface OutputObject {
    subnetController: string;
    randgenSubnetRound: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetupFHEEvent {
  export type InputTuple = [
    fcnSubnetID: BigNumberish,
    fdnSubnetID: BigNumberish,
    callbackGasLimitFCN: BigNumberish,
    callbackGasLimitFDN: BigNumberish
  ];
  export type OutputTuple = [
    fcnSubnetID: bigint,
    fdnSubnetID: bigint,
    callbackGasLimitFCN: bigint,
    callbackGasLimitFDN: bigint
  ];
  export interface OutputObject {
    fcnSubnetID: bigint;
    fdnSubnetID: bigint;
    callbackGasLimitFCN: bigint;
    callbackGasLimitFDN: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteEvent {
  export type InputTuple = [roundNumber: BigNumberish, voter: AddressLike];
  export type OutputTuple = [roundNumber: bigint, voter: string];
  export interface OutputObject {
    roundNumber: bigint;
    voter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoterLinkedEvent {
  export type InputTuple = [voter: AddressLike, hotWallet: AddressLike];
  export type OutputTuple = [voter: string, hotWallet: string];
  export interface OutputObject {
    voter: string;
    hotWallet: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoterUnlinkdEvent {
  export type InputTuple = [voter: AddressLike, hotWallet: AddressLike];
  export type OutputTuple = [voter: string, hotWallet: string];
  export interface OutputObject {
    voter: string;
    hotWallet: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RandgenHub extends BaseContract {
  connect(runner?: ContractRunner | null): RandgenHub;
  waitForDeployment(): Promise<this>;

  interface: RandgenHubInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  fheKeySetID: TypedContractMethod<[], [bigint], "view">;

  hasVoted: TypedContractMethod<
    [hotWallet: AddressLike],
    [[boolean, bigint]],
    "view"
  >;

  hotWalletToVoter: TypedContractMethod<
    [hotWallet: AddressLike],
    [string],
    "view"
  >;

  initFirstRound: TypedContractMethod<[], [void], "nonpayable">;

  initialize: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  isVoterReady: TypedContractMethod<[hotWallet: AddressLike], [bigint], "view">;

  mySubnetID: TypedContractMethod<[], [bigint], "view">;

  onFeeReceived: TypedContractMethod<
    [requestID: BigNumberish, serviceFee: BigNumberish, gasFee: BigNumberish],
    [void],
    "payable"
  >;

  onServiceCancelled: TypedContractMethod<
    [requester: AddressLike, serviceID: BigNumberish, requestID: BigNumberish],
    [void],
    "nonpayable"
  >;

  onServiceCompleted: TypedContractMethod<
    [
      requestID: BigNumberish,
      subnetID: BigNumberish,
      serviceID: BigNumberish,
      outputs: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  onServiceRequested: TypedContractMethod<
    [
      arg0: AddressLike,
      serviceID: BigNumberish,
      requestID: BigNumberish,
      arg3: BytesLike,
      callbackGasLimit: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  refreshFheKeys: TypedContractMethod<[], [void], "nonpayable">;

  registerVoter: TypedContractMethod<
    [voterWallet: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setup: TypedContractMethod<
    [
      _mySubnetID: BigNumberish,
      _subnetController: AddressLike,
      _randgenSubnetRound: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  setupFHE: TypedContractMethod<
    [
      _fcnSubnetID: BigNumberish,
      _fdnSubnetID: BigNumberish,
      _callbackGasLimitFCN: BigNumberish,
      _callbackGasLimitFDN: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  submitRandomCt: TypedContractMethod<[num: BytesLike], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawGas: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fheKeySetID"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<[hotWallet: AddressLike], [[boolean, bigint]], "view">;
  getFunction(
    nameOrSignature: "hotWalletToVoter"
  ): TypedContractMethod<[hotWallet: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "initFirstRound"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isVoterReady"
  ): TypedContractMethod<[hotWallet: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "mySubnetID"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "onFeeReceived"
  ): TypedContractMethod<
    [requestID: BigNumberish, serviceFee: BigNumberish, gasFee: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "onServiceCancelled"
  ): TypedContractMethod<
    [requester: AddressLike, serviceID: BigNumberish, requestID: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onServiceCompleted"
  ): TypedContractMethod<
    [
      requestID: BigNumberish,
      subnetID: BigNumberish,
      serviceID: BigNumberish,
      outputs: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onServiceRequested"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      serviceID: BigNumberish,
      requestID: BigNumberish,
      arg3: BytesLike,
      callbackGasLimit: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "refreshFheKeys"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "registerVoter"
  ): TypedContractMethod<[voterWallet: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setup"
  ): TypedContractMethod<
    [
      _mySubnetID: BigNumberish,
      _subnetController: AddressLike,
      _randgenSubnetRound: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setupFHE"
  ): TypedContractMethod<
    [
      _fcnSubnetID: BigNumberish,
      _fdnSubnetID: BigNumberish,
      _callbackGasLimitFCN: BigNumberish,
      _callbackGasLimitFDN: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "submitRandomCt"
  ): TypedContractMethod<[num: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawGas"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "FheKeysReceived"
  ): TypedContractEvent<
    FheKeysReceivedEvent.InputTuple,
    FheKeysReceivedEvent.OutputTuple,
    FheKeysReceivedEvent.OutputObject
  >;
  getEvent(
    key: "FheKeysRequested"
  ): TypedContractEvent<
    FheKeysRequestedEvent.InputTuple,
    FheKeysRequestedEvent.OutputTuple,
    FheKeysRequestedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Setup"
  ): TypedContractEvent<
    SetupEvent.InputTuple,
    SetupEvent.OutputTuple,
    SetupEvent.OutputObject
  >;
  getEvent(
    key: "SetupFHE"
  ): TypedContractEvent<
    SetupFHEEvent.InputTuple,
    SetupFHEEvent.OutputTuple,
    SetupFHEEvent.OutputObject
  >;
  getEvent(
    key: "Vote"
  ): TypedContractEvent<
    VoteEvent.InputTuple,
    VoteEvent.OutputTuple,
    VoteEvent.OutputObject
  >;
  getEvent(
    key: "VoterLinked"
  ): TypedContractEvent<
    VoterLinkedEvent.InputTuple,
    VoterLinkedEvent.OutputTuple,
    VoterLinkedEvent.OutputObject
  >;
  getEvent(
    key: "VoterUnlinkd"
  ): TypedContractEvent<
    VoterUnlinkdEvent.InputTuple,
    VoterUnlinkdEvent.OutputTuple,
    VoterUnlinkdEvent.OutputObject
  >;

  filters: {
    "FheKeysReceived(uint256,uint256)": TypedContractEvent<
      FheKeysReceivedEvent.InputTuple,
      FheKeysReceivedEvent.OutputTuple,
      FheKeysReceivedEvent.OutputObject
    >;
    FheKeysReceived: TypedContractEvent<
      FheKeysReceivedEvent.InputTuple,
      FheKeysReceivedEvent.OutputTuple,
      FheKeysReceivedEvent.OutputObject
    >;

    "FheKeysRequested(uint256)": TypedContractEvent<
      FheKeysRequestedEvent.InputTuple,
      FheKeysRequestedEvent.OutputTuple,
      FheKeysRequestedEvent.OutputObject
    >;
    FheKeysRequested: TypedContractEvent<
      FheKeysRequestedEvent.InputTuple,
      FheKeysRequestedEvent.OutputTuple,
      FheKeysRequestedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Setup(address,address)": TypedContractEvent<
      SetupEvent.InputTuple,
      SetupEvent.OutputTuple,
      SetupEvent.OutputObject
    >;
    Setup: TypedContractEvent<
      SetupEvent.InputTuple,
      SetupEvent.OutputTuple,
      SetupEvent.OutputObject
    >;

    "SetupFHE(uint256,uint256,uint128,uint128)": TypedContractEvent<
      SetupFHEEvent.InputTuple,
      SetupFHEEvent.OutputTuple,
      SetupFHEEvent.OutputObject
    >;
    SetupFHE: TypedContractEvent<
      SetupFHEEvent.InputTuple,
      SetupFHEEvent.OutputTuple,
      SetupFHEEvent.OutputObject
    >;

    "Vote(uint256,address)": TypedContractEvent<
      VoteEvent.InputTuple,
      VoteEvent.OutputTuple,
      VoteEvent.OutputObject
    >;
    Vote: TypedContractEvent<
      VoteEvent.InputTuple,
      VoteEvent.OutputTuple,
      VoteEvent.OutputObject
    >;

    "VoterLinked(address,address)": TypedContractEvent<
      VoterLinkedEvent.InputTuple,
      VoterLinkedEvent.OutputTuple,
      VoterLinkedEvent.OutputObject
    >;
    VoterLinked: TypedContractEvent<
      VoterLinkedEvent.InputTuple,
      VoterLinkedEvent.OutputTuple,
      VoterLinkedEvent.OutputObject
    >;

    "VoterUnlinkd(address,address)": TypedContractEvent<
      VoterUnlinkdEvent.InputTuple,
      VoterUnlinkdEvent.OutputTuple,
      VoterUnlinkdEvent.OutputObject
    >;
    VoterUnlinkd: TypedContractEvent<
      VoterUnlinkdEvent.InputTuple,
      VoterUnlinkdEvent.OutputTuple,
      VoterUnlinkdEvent.OutputObject
    >;
  };
}
