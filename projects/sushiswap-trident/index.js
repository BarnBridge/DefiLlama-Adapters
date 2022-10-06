const { trident } = require("./trident.js");

const modulesToExport = {};
const trident_chains = ["polygon", "optimism", "kava", "metis"];

trident_chains.forEach((chain) => {
  modulesToExport[chain] = {
    tvl: trident(chain),
  };
});

module.exports = {
  misrepresentedTokens: false,
  ...modulesToExport,
};