# web3-wallet-connection

This package is built upon [ThirdWeb](https://thirdweb.com/) & [Alchemy](https://www.alchemy.com/sdk) SDKs, it simplifies the process of Connecting your wallet and Sign In With Ethereum to verify the wallet ownership in your application.

## Installation

using NPM

```
npm install web3-wallet-connection
```

using YARN

```
yarn add web3-wallet-connection
```

## Usage

### Setting Up the Wallet Provider

First, wrap your application with the WalletProvider & ThirdwebProvider to provide wallet context throughout your app.

```
//_app.tsx

import { WalletProvider } from 'web3-wallet-connection';

function App() {
    return(
        <WalletProvider>
            <ThirdwebProvider>
                <App />
            </ThirdwebProvider>
        </WalletProvider>
    )
}
```

### Connect Wallet

To connect the wallet in you DAPP, You can use the ConnectWallet component

```
import { ConnectWallet } from 'web3-wallet-connection';

<ConnectWallet
    theme="light"
    auth={{ loginOptional: false }}
    btnTitle="Connect Your Wallet"
    showThirdwebBranding={false}
    onConnect={async (wallet) => {
        //after successful connection of wallet this callback will be trigered
        //here you can use the react state to manage the stuff in your app

        setWalletConnected(true);
        setShowConnectedWallets(true);
    }}
/>
```

### Using the Wallet Context

To access and manipulate the wallet context, use the useWallet hook.

```
// ExampleComponent.jsx

import React from 'react';
import { useWallet } from 'web3-wallet-connection';

const ExampleComponent = () => {
  const {
    walletConnected,
    setWalletConnected,
    currentlyConnectedWallet,
    setCurrentlyConnectedWallet,
    // ...other state variables and setters
  } = useWallet();

  return (
    <div>
      <p>Wallet Connected: {walletConnected.toString()}</p>
      <button onClick={() => setWalletConnected(!walletConnected)}>
        Toggle Wallet Connection
      </button>
      {/* Add more UI components and handlers as needed */}
    </div>
  );
};

export default ExampleComponent;

```

### Wallet Actions & Hooks

There are some wallet actions that you can do

#### Sign In With Etherium

```
import { useWalletActions } from "web3-wallet-connection";

//inside your component after connecting the wallet, call this function to trigger the sign In with etherium process

const { createMessageAndSign } = useWalletActions();
createMessageAndSign();

```

#### useAddress hook

useAddress is a Hook provided by Thirdweb to get the connected wallet address

```
import { useAddress } from "web3-wallet-connection";

//If wallet is connected you can get the wallet address like this

const address = useAddress();
```

#### Wallet connection Status

useConnectionStatus is a Hook you can use to get the wallet connection status in realtime

It can be one of the following:

- `unknown`: connection status is not known yet. This is the initial state.
- `connecting`: wallet is being connected. Either because of a user action, or when the wallet is auto-connecting on page load.
- `connected`: the wallet is connected and ready to be used.
- `disconnected`: the wallet is not connected.

```
import { useConnectionStatus } from "web3-wallet-connection";

//inside your component

const connectionStatus = useConnectionStatus();


if (connectionStatus === "connected") {

    //wallet is connected

} else if(connectionStatus === "disconnected"){

    //wallet is disconnected

}

...

```

#### Disconnect Wallet

useDisconnect is the Hook you can use to disconnect the wallet manually

```
import { useDisconnect } from "web3-wallet-connection";

const disconnect = useDisconnect();

disconnect();
```

#### Get ENS of Wallet

We have some functions from Alchemy SDK, to get the ENS of the wallet Address and get the Wallet Address of an ENS

`lookUpENS` can be used to get the Ens of the Wallet address.
`resolveENS` can be used to get the Address associated to the ENS.

```
import { resolveENS, lookUpENS } from "web3-wallet-connection";

const ensName = await lookUpENS(address, ALCHEMY_API_KEY);

const walletAddress = await resolveENS(ensName, ALCHEMY_API_KEY);
```

You can get the Alchemy API key from [here](https://dashboard.alchemy.com/)
