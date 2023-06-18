/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "deet42.iodinecoin.tokenfactory";

export interface Denom {
  denom: string;
  description: string;
  ticker: string;
  precision: number;
  url: string;
  maxSupply: number;
  supply: number;
  canChangeMaxSupply: boolean;
  owner: string;
}

function createBaseDenom(): Denom {
  return {
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    supply: 0,
    canChangeMaxSupply: false,
    owner: "",
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(32).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(48).int32(message.maxSupply);
    }
    if (message.supply !== 0) {
      writer.uint32(56).int32(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply);
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.precision = reader.int32();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.maxSupply = reader.int32();
          break;
        case 7:
          message.supply = reader.int32();
          break;
        case 8:
          message.canChangeMaxSupply = reader.bool();
          break;
        case 9:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      supply: isSet(object.supply) ? Number(object.supply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined && (obj.description = message.description);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    message.url !== undefined && (obj.url = message.url);
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.supply = object.supply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.owner = object.owner ?? "";
    return message;
  },
};

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
