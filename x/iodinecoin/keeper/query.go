package keeper

import (
	"github.com/Deet42/iodinecoin/x/iodinecoin/types"
)

var _ types.QueryServer = Keeper{}
