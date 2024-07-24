import { Alchemy, Network } from "alchemy-sdk";

//takes ENS and give the wallet address
export function resolveENS(
  ens: string,
  alchemyApiKey: any
): Promise<string | null> {
  const config = {
    apiKey: alchemyApiKey,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  return alchemy.core.resolveName(ens);
}

//Takes wallet address and gives the ENS
export function lookUpENS(
  walletAddress: string,
  alchemyApiKey: any
): Promise<string | null> {
  const config = {
    apiKey: alchemyApiKey,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  return alchemy.core.lookupAddress(walletAddress);
}
