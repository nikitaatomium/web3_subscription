import React, { useState, useEffect, FC, useMemo } from 'react'; 
import {
    ConnectionProvider,
    WalletProvider,
    useConnection,
    useWallet
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { WalletAdapter } from '@solana/wallet-adapter-base'; 
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import WalletSign from './WalletSign';
import { Connection, clusterApiUrl } from '@solana/web3.js'; 

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletChecker = () => { 
// Can be set to 'devnet', 'testnet', or 'mainnet-beta'
const network = WalletAdapterNetwork.mainnet;
// You can also provide a custom RPC endpoint
const endpoint = useMemo(() => clusterApiUrl(network), [network]);
// Only the wallets you configure here will be compiled into your application
const wallets = useMemo(() => [
      new SolflareWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
], [network]);

const [publicKey, setPublicKey] = useState(null);
const handlePublicKey = (key) => { setPublicKey(key); }



return ( 
 <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: 'inline-block',
              }}
            >
              <WalletMultiButton />
            </div>
          </WalletModalProvider>
          <WalletSign />
        </WalletProvider>
</ConnectionProvider>
);
 };



export default WalletChecker;