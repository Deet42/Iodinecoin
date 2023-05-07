package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Deet42/iodinecoin/testutil/keeper"
	"github.com/Deet42/iodinecoin/x/tokenfactory/keeper"
	"github.com/Deet42/iodinecoin/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TokenfactoryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
