import { ethers } from 'ethers';

import ABI from './ABI.json';


const provider = new ethers.providers.JsonRpcProvider({ url: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`, timeout: 30000 });
const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, ABI as any, provider);


export { provider, contract };