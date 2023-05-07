package keeper

import (
	"github.com/Deet42/iodinecoin/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
