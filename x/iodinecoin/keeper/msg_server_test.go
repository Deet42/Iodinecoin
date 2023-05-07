package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Deet42/iodinecoin/testutil/keeper"
	"github.com/Deet42/iodinecoin/x/iodinecoin/keeper"
	"github.com/Deet42/iodinecoin/x/iodinecoin/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.IodinecoinKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
