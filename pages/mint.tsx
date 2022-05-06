import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';

import { contract } from '../lib/web3';

import type { ContractInfo } from '../interfaces';
import type { Signer, BigNumber } from 'ethers';
import type { TransactionResponse } from '@ethersproject/abstract-provider';
import type { NextPage } from 'next';


const Index: NextPage = () => {
	const [ addres, setAddress ] = useState('');
	const [ signer, setSigner ] = useState<Signer | null>(null);
	const [ amount, setAmount ] = useState(1);
	const [ contractInfo, setContractInfo ] = useState<ContractInfo | null>(null);


	async function mint() {
		if (!signer || !contractInfo) return alert('Please connect your wallet!');


		try {
			const value = contractInfo.cost.mul(amount);
			const gasLimit = await contract.connect(signer).estimateGas.mint(amount, { value });

			const receipt = await contract.connect(signer).mint(amount, { gasLimit, value }) as TransactionResponse;

			const { status } = await receipt.wait();
			if (status !== 1) return alert('Error!');


			alert('Success!');
		} catch (err: any) {
			const msg = err.data?.message || err.message;

			if (msg) alert(`Error:\n${msg}`);
		}
	}

	async function connectWallet() {
		const { ethereum } = window;

		if (!ethereum) return alert('Please install MetaMask!');


		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();

		const accounts = await provider.send('eth_requestAccounts', []) as string[];
		if (!accounts) return;


		try {
			await provider.send('wallet_switchEthereumChain', [{ chainId: '0x1' }]);
		} catch (_) {
			return alert('Please switch your network to the Ethereum mainnet!');
		}


		setAddress(accounts[0]);
		setSigner(signer);
	}

	function incrementAmount() {
		if ( amount + 1 <= (contractInfo?.maxMintAmount || 8) ) setAmount(amount + 1);
	}

	function decrementAmount() {
		if (amount > 1) setAmount(amount - 1);
	}


	useEffect(() => {
		async function fetchData() {
			const [ _totalSupply, _maxSupply, cost, _maxMintAmount ] = await Promise.all([
				contract.totalSupply(),
				contract.maxSupply(),
				contract.cost(),
				contract.maxMintAmount()
			]) as [ BigNumber, BigNumber, BigNumber, BigNumber ];


			setContractInfo({
				totalSupply: _totalSupply.toNumber(),
				maxSupply: _maxSupply.toNumber(),
				cost,
				maxMintAmount: _maxMintAmount.toNumber()
			});
		}


		fetchData();
	}, []);


	return (
		<>
			<Head>
				<title>Crypto Mining Club</title>

				<meta name='title' content='Crypto Mining Club' />
				<meta name='description' content='Mint and join the CMC community!' />
				<meta name='keywords' content='nft,nfts,dao,ethereum,kadena,eth,kda,cmc,crypto mining club' />

				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />

				<meta name='theme-color' content='#98EEEF' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
				<meta property='og:title' content='Crypto Mining Club' />
				<meta property='og:image' content='/banner.png' />
				<meta property='og:description' content='Mint and join the CMC community!' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:site' content='@CryptoMiningLLC' />
				<meta property='twitter:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
				<meta property='twitter:title' content='Crypto Mining Club' />
				<meta property='twitter:image' content='/banner.png' />
				<meta property='twitter:description' content='Mint and join the CMC community!' />
			</Head>


			<main className='flex flex-col items-center justify-center p-4 h-screen text-white bg-mintpage-img bg-cover bg-no-repeat'>
				{contractInfo
					? <div className='flex flex-col items-center gap-3 py-4 px-8 text-xl bg-[#ffffff15] border-2 border-white rounded-md'>
						<h1 className='text-2xl mb-4'>Mint and join the CMC community!</h1>

						<div>{contractInfo.totalSupply}/{contractInfo.maxSupply}</div>

						<div className='flex items-center gap-4'>
							<button
								className='flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff27] border-2 border-white'
								onClick={decrementAmount}
							>
								<span>-</span>
							</button>

							<div>{amount}</div>

							<button
								className='flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff27] border-2 border-white'
								onClick={incrementAmount}
							>
								<span>+</span>
							</button>
						</div>

						<div>{ethers.utils.formatEther( contractInfo.cost.mul(amount) )} ETH</div>

						<div className='mt-5'>
							{signer && addres
								? <button
									className='px-4 py-2 text-2xl rounded-lg text-black bg-[#FFE000] border-2 border-black shadow-lg hover:opacity-80'
									onClick={mint}
								>
									Mint
								</button>

								: <button
									className='px-4 py-2 text-2xl rounded-lg text-black bg-[#FFE000] border-2 border-black shadow-lg hover:opacity-80'
									onClick={connectWallet}
								>
									Connect Wallet
								</button>
							}
						</div>
					</div>

					: <div>
						<span>Loading</span>
					</div>
				}
			</main>
		</>
	);
}


export default Index;