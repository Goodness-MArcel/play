import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { metaMask, walletConnect } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
    walletConnect({ projectId: 'YOUR_WALLETCONNECT_PROJECT_ID' }), // Get from walletconnect.com
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});