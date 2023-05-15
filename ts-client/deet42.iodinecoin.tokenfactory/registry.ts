import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgMintAndSendTokens } from "./types/iodinecoin/tokenfactory/tx";
import { MsgCreateDenom } from "./types/iodinecoin/tokenfactory/tx";
import { MsgDeleteDenom } from "./types/iodinecoin/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/iodinecoin/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/iodinecoin/tokenfactory/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/deet42.iodinecoin.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/deet42.iodinecoin.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/deet42.iodinecoin.tokenfactory.MsgDeleteDenom", MsgDeleteDenom],
    ["/deet42.iodinecoin.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
    ["/deet42.iodinecoin.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    
];

export { msgTypes }