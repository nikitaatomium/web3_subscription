import { useState } from 'react'; 
import { CandyMachine } from '@candy-machine/api'; 
import { WalletAdapter } from '@solana/wallet-adapter-base'; 
import { Connection, PublicKey } from '@solana/web3.js';
const MintNFT = () => { 
const [isLoading, setIsLoading] = useState(false);
const handleMintNFT = async () => { setIsLoading(true);
const candyMachineId = new PublicKey('your_candy_machine_id_here'); 
const wallet = new WalletAdapter(window.solana);
await wallet.connect();
const connection = new Connection('https://api.mainnet-beta.solana.com'); 
const candyMachine = await CandyMachine.load(candyMachineId, connection);
const tx = await candyMachine.mintOne(wallet.publicKey);
await connection.confirmTransaction(tx);
setIsLoading(false); 
};
return ( 
<div> 
<button onClick={handleMintNFT} disabled={isLoading}> {isLoading ? 'Loading...' : 'Mint NFT'} </button> 
</div> 
); 
};

export default MintNFT;