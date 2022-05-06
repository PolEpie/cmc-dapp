import type { BigNumber } from 'ethers';


interface ContractInfo {
    totalSupply: number;
    maxSupply: number;
    cost: BigNumber;
    maxMintAmount: number;
}


export default ContractInfo;