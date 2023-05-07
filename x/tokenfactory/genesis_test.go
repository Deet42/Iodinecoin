package tokenfactory_test

import (
	"testing"

	keepertest "github.com/Deet42/iodinecoin/testutil/keeper"
	"github.com/Deet42/iodinecoin/testutil/nullify"
	"github.com/Deet42/iodinecoin/x/tokenfactory"
	"github.com/Deet42/iodinecoin/x/tokenfactory/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TokenfactoryKeeper(t)
	tokenfactory.InitGenesis(ctx, *k, genesisState)
	got := tokenfactory.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}