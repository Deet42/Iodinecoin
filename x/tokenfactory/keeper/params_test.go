package keeper_test

import (
	"testing"

	testkeeper "github.com/Deet42/iodinecoin/testutil/keeper"
	"github.com/Deet42/iodinecoin/x/tokenfactory/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TokenfactoryKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
