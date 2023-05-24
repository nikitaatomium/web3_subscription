import { useWallet } from '@solana/wallet-adapter-react';
import React, { useState, useEffect, FC, useCallback } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js'; 
import {
    ConnectionProvider,
    WalletProvider,
    useConnection
} from '@solana/wallet-adapter-react';
import bs58 from "bs58";


const WalletSign = () => {    
const { connection } = useConnection(); 
const [nftExists, setNftExists] = useState(false);
const [isConnected, setIsConnected] = useState(false);     
const { publicKey, connected } = useWallet();
if (publicKey) { 
    
   // console.log('User is connected to a Solana wallet'); 
} else { 

   // console.log('User is not connected to a Solana wallet'); 
}

useEffect(() => { 
async function checkNft() { 
if (!publicKey) return;
setIsConnected(true);   
const NFT_ADDRESS = "FsSViDSVB1FjxYFki2ouT7NVBgXaeeqjTJhurBAn9uKV";
const connection = new Connection("https://solana-api.projectserum.com"); 
//const nftAccountInfo = await connection.getAccountInfo(new publicKey(NFT_ADDRESS));
//if (nftAccountInfo?.owner.toBase58() === publicKey.toBase58()) { 
//setNftExists(true); 
//console.log('NFT here');
// Call handlePublicKey function with publicKey value 

return ( 
<div id="wrmsg"> 
{isConnected ? ( 
nftExists ? ( 
<p>You have the NFT in your wallet!</p> 
) : ( 
<p>You do not have the NFT in your wallet.</p> 
) 
) : ( 
<p>Connect</p>   
)} 
</div> 
);
//} 
} 

checkNft(); 
}, [publicKey])



};

export default WalletSign;