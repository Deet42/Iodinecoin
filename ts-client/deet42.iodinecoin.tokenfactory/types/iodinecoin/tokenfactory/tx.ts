/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "deet42.iodinecoin.tokenfactory";

export interface MsgCreateDenom {
  owner: string;
  denom: string;
  description: string;
  ticker: string;
  precision: number;
  url: string;
  maxSupply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgCreateDenomResponse {
}

export interface MsgUpdateDenom {
  owner: string;
  denom: string;
  description: string;
  url: string;
  maxSupply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgUpdateDenomResponse {
}

export interface MsgDeleteDenom {
  owner: string;
  denom: string;
}

export interface MsgDeleteDenomResponse {
}

export interface MsgMintAndSendTokens {
  owner: string;
  denom: string;
  amount: number;
  recipient: string;
}

export interface MsgMintAndSendTokensResponse {
}

export interface MsgUpdateOwner {
  owner: string;
  denom: string;
  newOwner: string;
}

export interface MsgUpdateOwnerResponse {
}

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    owner: "",
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    canChangeMaxSupply: false,
  };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(40).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).int32(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.ticker = reader.string();
          break;
        case 5:
          message.precision = reader.int32();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.maxSupply = reader.int32();
          break;
        case 8:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
    };
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined && (obj.description = message.description);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    message.url !== undefined && (obj.url = message.url);
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}

export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDenomResponse {
    return {};
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
};

function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return { owner: "", denom: "", description: "", url: "", maxSupply: 0, canChangeMaxSupply: false };
}

export const MsgUpdateDenom = {
  encode(message: MsgUpdateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(40).int32(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(48).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.maxSupply = reader.int32();
          break;
        case 6:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDenom {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
    };
  },

  toJSON(message: MsgUpdateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
};

function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}

export const MsgUpdateDenomResponse = {
  encode(_: MsgUpdateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDenomResponse {
    return {};
  },

  toJSON(_: MsgUpdateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
};

function createBaseMsgDeleteDenom(): MsgDeleteDenom {
  return { owner: "", denom: "" };
}

export const MsgDeleteDenom = {
  encode(message: MsgDeleteDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDenom {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeleteDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDenom>, I>>(object: I): MsgDeleteDenom {
    const message = createBaseMsgDeleteDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgDeleteDenomResponse(): MsgDeleteDenomResponse {
  return {};
}

export const MsgDeleteDenomResponse = {
  encode(_: MsgDeleteDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDenomResponse {
    return {};
  },

  toJSON(_: MsgDeleteDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDenomResponse>, I>>(_: I): MsgDeleteDenomResponse {
    const message = createBaseMsgDeleteDenomResponse();
    return message;
  },
};

function createBaseMsgMintAndSendTokens(): MsgMintAndSendTokens {
  return { owner: "", denom: "", amount: 0, recipient: "" };
}

export const MsgMintAndSendTokens = {
  encode(message: MsgMintAndSendTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintAndSendTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintAndSendTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgMintAndSendTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintAndSendTokens>, I>>(object: I): MsgMintAndSendTokens {
    const message = createBaseMsgMintAndSendTokens();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? 0;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgMintAndSendTokensResponse(): MsgMintAndSendTokensResponse {
  return {};
}

export const MsgMintAndSendTokensResponse = {
  encode(_: MsgMintAndSendTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintAndSendTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintAndSendTokensResponse {
    return {};
  },

  toJSON(_: MsgMintAndSendTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintAndSendTokensResponse>, I>>(_: I): MsgMintAndSendTokensResponse {
    const message = createBaseMsgMintAndSendTokensResponse();
    return message;
  },
};

function createBaseMsgUpdateOwner(): MsgUpdateOwner {
  return { owner: "", denom: "", newOwner: "" };
}

export const MsgUpdateOwner = {
  encode(message: MsgUpdateOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOwner {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : "",
    };
  },

  toJSON(message: MsgUpdateOwner): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwner>, I>>(object: I): MsgUpdateOwner {
    const message = createBaseMsgUpdateOwner();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};

function createBaseMsgUpdateOwnerResponse(): MsgUpdateOwnerResponse {
  return {};
}

export const MsgUpdateOwnerResponse = {
  encode(_: MsgUpdateOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateOwnerResponse {
    return {};
  },

  toJSON(_: MsgUpdateOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwnerResponse>, I>>(_: I): MsgUpdateOwnerResponse {
    const message = createBaseMsgUpdateOwnerResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse>;
  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.UpdateDenom = this.UpdateDenom.bind(this);
    this.DeleteDenom = this.DeleteDenom.bind(this);
    this.MintAndSendTokens = this.MintAndSendTokens.bind(this);
    this.UpdateOwner = this.UpdateOwner.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("deet42.iodinecoin.tokenfactory.Msg", "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request("deet42.iodinecoin.tokenfactory.Msg", "UpdateDenom", data);
    return promise.then((data) => MsgUpdateDenomResponse.decode(new _m0.Reader(data)));
  }

  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse> {
    const data = MsgDeleteDenom.encode(request).finish();
    const promise = this.rpc.request("deet42.iodinecoin.tokenfactory.Msg", "DeleteDenom", data);
    return promise.then((data) => MsgDeleteDenomResponse.decode(new _m0.Reader(data)));
  }

  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse> {
    const data = MsgMintAndSendTokens.encode(request).finish();
    const promise = this.rpc.request("deet42.iodinecoin.tokenfactory.Msg", "MintAndSendTokens", data);
    return promise.then((data) => MsgMintAndSendTokensResponse.decode(new _m0.Reader(data)));
  }

  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse> {
    const data = MsgUpdateOwner.encode(request).finish();
    const promise = this.rpc.request("deet42.iodinecoin.tokenfactory.Msg", "UpdateOwner", data);
    return promise.then((data) => MsgUpdateOwnerResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
