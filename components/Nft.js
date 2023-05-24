import React, { useState, useEffect, FC, useMemo } from 'react'; 
import dynamic from 'next/dynamic';
import {
    ConnectionProvider,
    WalletProvider,
    useConnection,
    useWallet
} from '@solana/wallet-adapter-react';
import WalletChecker from './WalletChecker';
import { Connection, clusterApiUrl } from '@solana/web3.js'; 


const NFTChecker = () => { 
const WalletProvider = dynamic(() => import('./WalletChecker'), {
  ssr: false,
})

return ( 
<div> 
  <WalletProvider autoConnect>
    </WalletProvider>
</div> 
);
 };


export default NFTChecker;