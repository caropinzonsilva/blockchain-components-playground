import {
  Tokengate,
  Requirements,
  Reaction,
  UnlockingToken,
} from "@shopify/tokengate";
import { useConnectWallet, ConnectButton } from "@shopify/connect-wallet";
import "./App.css";

function App() {
  const { wallet } = useConnectWallet({
    onConnect: (response) => {
      console.log("onConnect", response);
    },
    onDisconnect: () => {
      console.log("onDisconnect");
    },
  });

  return (
    <div id="tokengate">
      <Tokengate
        isConnected={Boolean(wallet)}
        connectButton={<ConnectButton />}
        requirements={getMockRequirements()}
        reaction={getMockReaction()}
        unlockingTokens={getMockUnlockingTokens()}
      />
    </div>
  );
}

const getMockRequirements = (): Requirements => ({
  logic: "ANY" as const,
  conditions: [
    {
      name: "CryptoPunks",
      collectionAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      imageUrl:
        "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=384",
    },
    {
      name: "Moonbirds",
      imageUrl:
        "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=384",
      collectionAddress: "0x23581767a106ae21c074b2276D25e5C3e136a68b",
    },
  ],
});
const getMockReaction = (): Reaction => ({
  type: "exclusive_access" as const,
});
const getMockUnlockingTokens = (): UnlockingToken[] => [
  {
    collectionAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    collectionName: "CryptoPunks",
    imageUrl:
      "https://i.seadn.io/gae/ZWEV7BBCssLj4I2XD9zlPjbPTMcmR6gM9dSl96WqFHS02o4mucLaNt8ZTvSfng3wHfB40W9Md8lrQ-CSrBYIlAFa?auto=format&w=1000",
    name: "CryptoPunk #1719",
  },
  {
    collectionAddress: "0x23581767a106ae21c074b2276D25e5C3e136a68b",
    collectionName: "Moonbirds",
    imageUrl:
      "https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x66936fd157d67f7f12155b72f323b413ab7694f4d38d800b330b7ad16bc41f4d?resource_type=image&f=auto&c=limit&w=1600&q=auto:best",
    name: "#403 🪺",
  },
];

export default App;
