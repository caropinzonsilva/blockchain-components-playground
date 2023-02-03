import React from "react";
import ReactDOM from "react-dom/client";
import { ConnectWalletProvider } from "@shopify/connect-wallet";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import App from "./App";
import "./index.css";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    // alchemyProvider({apiKey: 'INSERT API KEY HERE'}),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectWalletProvider chains={chains}>
        <App />
      </ConnectWalletProvider>
    </WagmiConfig>
  </React.StrictMode>
);
