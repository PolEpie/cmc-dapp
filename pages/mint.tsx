import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ethers, Contract } from 'ethers';

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { formatDuration } from '../lib';
import abi from '../lib/ABI.json';

import type { ContractInfo } from '../interfaces';
import type { Signer, BigNumber } from 'ethers';
import type { TransactionResponse } from '@ethersproject/abstract-provider';
import type { NextPage } from 'next';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_KEY // required
        }
    }
}
const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

// List of 7 public Ethereum addresses
let addressesNonOg = [
    "0x2B1E3b4D3393b98DDe4c23429fca347939c74897",
    "0xFe8cd3aECA5292d9f6Ec1f002817feD1F09DBE25",
    "0xf2C7F66A54A14d642C7998b05177F41b70398A01",
    "0x6eEbb4AB4b7178BCf8dF605A121685a3288F15Fd",
    "0x04758d3A48146755476d175e2FCC1610019D4603",
    "0x11f5ffE2e0C7636A963360C167AA00a5F6c4A903",
    "0x6671DC300262ECF345fcCFf041cC1a218B57Ca5E",
    "0x87a80785Ebb41efDf428A89EA0a5151f8582fe73",
    "0x489FBD76F61585b97393bf430A39C78B43F572c8",
    "0x2c688cbD1E1fF415Ec15811cDf71b664E21dc641",
    "0xE5954b066A11ff30a00D23f62cEa54B9de2382D5",
    "0x2344dc4b36b612a3B7FB0E39b1b96223BEecd001",
    "0x2d13A9995286c933277e76C2B1D92cEfD77eBFeC",
    "0xf1b1568b0c8e0c5f9ac4c78698fd1ad70edfa998",
    "0x6853285716a92aF6DD07F2F6aeBCA23E5b13f8f6",
    "0x45aC530fC4df90E08D89FAe30f3419aABB3bE8ee",
    "0x97D57b98a67698f293B338a9a97056e356d98081",
    "0xD482578b50f35197605825343ab99965AfBC436B",
    "0xcb39d759c7E01cd72b3920a36cD38c97e2C8f1A2",
    "0xe4D6eE751498158E95A740427FaC55132f3CF0B9",
    "0xee939f46CF0C1F6B91D4C4B6641C1Bcfe945f609",
    "0x774189453dc3b295b6d3f6c09f870df8a1582c18",
    "0x8a8406958Cb79EbC2668c51AFc1a66a24DBc9805",
    "0x029e13C1dCde8972361C9552Ced69b97596e0E86",
    "0x2c688cbD1E1fF415Ec15811cDf71b664E21dc641",
    "0x71801ee2AAa39B1B16733349796A93c24e664B47",
    "0xe4D6eE751498158E95A740427FaC55132f3CF0B9",
    "0x0F3A6a4257b8c8C2cD8dA7ee8A5167F34ee60896",
    "0xDe2bB3e181C90516d39FFA15b4E464673B1Db8C9",
    "0x638aDc0eB925E33f8e9402a5fE4Ca3E758F88351",
    "0xfBde15e1Ddb4FB265b5A9bBC2CBb88296c7bD372",
    "0xb640efa7BAFC3C83526b6863764D7F09aFD9eb79",
    "0xB1fC723163eD5719DCa82f10F7b725e744a1D126",
    "0x9f5f5293392eF8413F90109Ba9ce7E8868baD314",
    "0xD74B1E15B58558897686caB48b98A92424264379",
    "0xD74B1E15B58558897686caB48b98A92424264379",
    "0xd4f650da6a66C56C4C8d9b0dA904A96b12Dd721E",
    "0xD1a1997b91cd7584b582d5532C3781bC5562B59E",
    "0x27FaCA7b11A59e5E0046aD5109584D725c8D7044",
    "0x0dfCb1735096aCbBC0eff2EBeB27501D548CACB5",
    "0xe31Ba230C35A92dEa6a971D8ce3191a283A735cc",
    "0xB4702d8ca5a87c33C34efFaD7C95840D84141575",
    "0x1D086F71585a2B0B4D6813781C5FDFD1FbBEF015",
    "0xFfE94c4065Ab37d2a0c37478CB1BACEf6f17092e",
    "0x9853645846458d134b1e847963919b222dce577f",
    "0xe7797fD817496F728B600C989F96d03E859AaB51",
    "0x1D086F71585a2B0B4D6813781C5FDFD1FbBEF015",
    "0xB5917Ff9B44D650C5aF81e5BA4d82C503Db21612",
    "0x8e969C5587f28b31aD4806d3a5A884D29aAd2015",
    "0x2B1E3b4D3393b98DDe4c23429fca347939c74897",
    "0x9751DBC28Ce3B46274eC347FF6F653006817AC6b",
    "0xf21b42E532B6B9dCe4f970f98c08BD79657d9f1B",
    "0xE9AfCD05F7F44e213cc49adbB908070CaB38E933",
    "0x743f214FA7Ffa587FfABaf4E98a0754e769F564b",
    "0x58B063e44E0C87B54E847967092FE0fE151AE1fC",
    "0x12Fe47B97e35A4CD597265aB7BfE45A1102D4113",
    "0x0D2e4D733FB3C98569A83335f734FA891d8dA8E6",
    "0xf8D7b83441894527da15bfA3a0AF78b587899612",
    "0xd48BD43B5Aa6c1593712222b5d68721C4803F962",
    "0x256158f9f116251f25A2709a8C431c0109dfF993",
    "0x6d837C16a2c62579EE5467970653ad5eabB7314a",
    "0x0E99de2041657e35664442aAF815f7a8ceBdf202",
    "0x6739d352Bdb1132216d35B2e1ac2fBc780f2A706",
    "0x7141d13Fb423cA69f6b7316a53af65a884092BA9",
    "0xd57d3f0f31047F2c5e1F1b09F96eFd23C05b1d5b",
    "0x54d8589f268eF83AEAe45DAAB570BC13DE53E7e8",
    "0x07035d0e0cFb5e89218be943507694526A4EBE54",
    "0x7b6e67aED9205ebe0c479d38724D6aFC9AbA3c6B",
    "0x783A8619d6E1da6e9aB779f4CC8A398210a05210",
    "0x4C84Cc823F295eF35801fbdEb954f0b0D4193738",
    "0x1C81E4caAC7827082edac961c44B9F06aD562462",
    "0x90dFd4c5D1cEA707441C692C054952Ca3B6BBE3E",
    "0x38C03C4D841f520f7f11A4c3B9E6CB03c5Ac9051",
    "0x897b2EdE202E0AC83c30944930829cf94BB25aE6",
	"0x374cAA1f6650Ff440cE360F50A1928058d5d7a46"
]

let addressesOG = [
    "0x6B6617EEc3C278604170Adb1E4233072107C5EAc",
    "0x6C7d52D702D1cD0EA6D1e0cc63381474b8716b4D",
    "0x27FaCA7b11A59e5E0046aD5109584D725c8D7044",
    "0x8681e6117a063AC823401a9563cb6970bfe146E8",
    "0xd46f5C5d7d2AF28882D8f1a0546F3B07B670A07B",
    "0x20Ab0b89Ab7f8077d92c87299da3c162981103fc",
    "0x692cfC6A03D596f1496CFa976FF9e2eb62EEb327",
    "0x424A85b36b2B41f65f3B0de7877fbf254e70B3eE",
    "0x186482aEd556CBcc8937a9c02DFE66185657cfF5",
    "0x86A606cbF0558B0745dCc55fDbB9488180Ba187D",
    "0x575161e774566fb51e0a217ff6f64825eafe850a",
    "0x20Ab0b89Ab7f8077d92c87299da3c162981103fc",
    "0x40ccc7667b9Ad6495d2AD51685349509dD9F9Aef",
    "0x0F3A6a4257b8c8C2cD8dA7ee8A5167F34ee60896",
    "0x30e22B2c212C6b78A3074D9b7fECaAdD552F6bb3",
    "0xd46f5C5d7d2AF28882D8f1a0546F3B07B670A07B",
    "0x3510B2aAA7e9577A577f899ef8Eb097312095994",
    "0x3d1cC5325339C26043b4f5827245c2b7F04fAc06",
    "0x379A9D99Edf728F26a599B26B24e7187ca58aFE5",
    "0xa84196B6937E5485Fa8F28F1BDc3700aFd9769F7",
    "0x619d9D08294a3aF023Eae1Fd6FeE4Dd0D1933fF8",
    "0x50B13f2F79Fa06Ab33f5eaf7ddea666499C36de2",
    "0x619d9D08294a3aF023Eae1Fd6FeE4Dd0D1933fF8",
    "0x0F3A6a4257b8c8C2cD8dA7ee8A5167F34ee60896",
    "0x5B4baC68C7e924C530cC489966ca7b53Bbf62AC3",
    "0x489FBD76F61585b97393bf430A39C78B43F572c8",
    "0x0E99de2041657e35664442aAF815f7a8ceBdf202",
    "0x5f34A11507f7C0A442B9FE45B67967a28de2B3a3",
    "0x09683509162930B75cc53848B2a7d03C7Ce78901",
    "0x5e8f889Fef6fB770daCc8A898600131cC81EA876",
    "0xf99E2615fac531182D2B4B669ff018456345bc85",
    "0x781c6764cd25d7762b43cd7a37fa27b89b1f3b8e",
    "0x7ba20173DB8CfC70093Bf85e533f6860700af381",
    "0xEEa8557f1a287a37c27516EC7aed14cDe7AF0f89",
	"0x533Fb7C7EA8fADa21D693e6e48B9B6956aBb2c43",
	"0x853a4DCe16C269505dc92b0f3B53AE9e8a80b228"
]


const Index: NextPage = () => {
	const [ addres, setAddress ] = useState('');
	const [ signer, setSigner ] = useState<Signer | null>(null);
	const [ amount, setAmount ] = useState(1);
	const [ contract, setContract ] = useState(null);
	const [ contractInfo, setContractInfo ] = useState<ContractInfo | null>(null);
	const [ counter, setCounter ] = useState( Number(process.env.NEXT_PUBLIC_COUNTDOWN_TIMESTAMP) - Date.now() );

	const { d, h, m, s } = formatDuration(counter);

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

		const web3Modal = new Web3Modal({
            providerOptions,
            network: "ropsten",
            cacheProvider: true,
            disableInjectedProvider: false,
        });

		const _provider = await web3Modal.connect();

		const provider = new ethers.providers.Web3Provider(_provider);
		const signer = provider.getSigner();

		const accounts = await provider.send('eth_requestAccounts', []) as string[];
		if (!accounts) return;


		try {
			await provider.send('wallet_switchEthereumChain', [{ chainId: '0x4' }]);
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

	function fetchContract() {
        setContract(new Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, signer));
	}


	useEffect(() => {
		async function fetchData() {

			let leavesOG = addressesOG.map(addr => keccak256(addr))
			let merkleTreeOG = new MerkleTree(leavesOG, keccak256, {sortPairs: true})
			let HexProofOG = merkleTreeOG.getHexProof(keccak256(addres))

			let leavesNonOG = addressesNonOg.map(addr => keccak256(addr))
			let merkleTreeNonOG = new MerkleTree(leavesNonOG, keccak256, {sortPairs: true})
			let HexProofNonOG = merkleTreeNonOG.getHexProof(keccak256(addres))

			console.log(HexProofOG)
			console.log(addres)

		// Pretty-print tree
			const [ _totalSupply, _maxSupply, cost, presaleCost, _maxMintAmount, _maxMintAmountNonOG, _maxMintAmountOG, isWhitelistNonOG, isWhitelistOG, onlyWhiteList ] = await Promise.all([
				contract.totalSupply(),
				contract.maxSupply(),
				contract.cost(),
				contract.presaleCost(),
				contract.maxMintAmountPerAddress(),
				contract.maxMintAmountPerAddressNonOG(),
				contract.maxMintAmountPerAddressOG(),
				contract.isAddressWhitelistedNonOG(addres, HexProofNonOG),
				contract.isAddressWhitelistedOG(addres, HexProofOG),
				contract.whitelistOnly()
			]) as [ BigNumber, BigNumber, BigNumber, BigNumber ];

			let maxMint;

			console.log(isWhitelistNonOG);
			console.log(isWhitelistOG);

			if (isWhitelistNonOG) {
				maxMint = _maxMintAmountNonOG;
			} else if (isWhitelistOG) {
				maxMint = _maxMintAmountOG;
			} else {
				maxMint = _maxMintAmount;
			}

			setContractInfo({
				totalSupply: _totalSupply.toNumber(),
				maxSupply: _maxSupply.toNumber(),
				cost: onlyWhiteList && presaleCost || cost,
				maxMintAmount: maxMint.toNumber() ,
				isWhiteList: isWhitelistNonOG || isWhitelistOG,
				presale: onlyWhiteList
			});
		}
		
		if (signer) {
			fetchContract();
		}
		

		if (addres && contract && contractInfo == null) {
			fetchData();
		}

		connectWallet();
		
	}, [addres, signer]);

	useEffect(() => {
		if (counter <= 0) return;

		setTimeout(() => setCounter( Number(process.env.NEXT_PUBLIC_COUNTDOWN_TIMESTAMP) - Date.now() ), 1000);
	}, [counter]);


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


			<main className='flex flex-col items-center justify-center p-[1vw] h-screen text-[2vw] text-white bg-mintpage-img bg-cover bg-no-repeat'>
				{counter > 0
					? <div className='flex items-center justify-between w-8/12 text-[3vw] drop-shadow-2xl'>
						<span>{d} days</span>

						<span>{h} hours</span>

						<span>{m} minutes</span>

						<span>{s} seconds</span>
					</div>

					: contractInfo ? <div className='flex flex-col items-center gap-[1vw] w-8/12 max-w-xl py-[1vw] px-[2vw] bg-[#3b3b3b40] border-2 border-white rounded-md shadow-lg'>
						<h1 className='text-[2vw] mb-[1vw]'>Mint and join the CMC community!</h1>

						<div>{contractInfo.totalSupply}/{contractInfo.maxSupply}</div>

						<div className='flex items-center gap-[2vw]'>
							<button
								className='flex items-center justify-center w-[3vw] h-[3vw] rounded-full bg-[#ffffff27] border-2 border-white'
								onClick={decrementAmount} disabled={contractInfo.presale && !contractInfo.isWhiteList}
							>
								<span>-</span>
							</button>

							<div>{amount}</div>

							<button
								className='flex items-center justify-center w-[3vw] h-[3vw] rounded-full bg-[#ffffff27] border-2 border-white'
								onClick={incrementAmount} disabled={contractInfo.presale && !contractInfo.isWhiteList}
							>
								<span>+</span>
							</button>
						</div>

						<div>{ethers.utils.formatEther( contractInfo.cost.mul(amount) )} ETH</div>

						<div className='mt-5'>
							{signer && addres
								? 
								<>
									{contractInfo.presale && !contractInfo.isWhiteList ?
										<button
											className='px-[2vw] py-[1vw] text-[2vw] rounded-lg text-black bg-[#FFE000] border-2 border-black shadow-lg hover:opacity-80 disabled:opacity-80'
											disabled
										>
											Only Whitelist
										</button>
									: 
										<button
											className='px-[2vw] py-[1vw] text-[2vw] rounded-lg text-black bg-[#FFE000] border-2 border-black shadow-lg hover:opacity-80'
											onClick={mint}
										>
											Mint
										</button>
									}
								</>
								: <button
									className='px-[2vw] py-[1vw] text-[2vw] rounded-lg text-black bg-[#FFE000] border-2 border-black shadow-lg hover:opacity-80'
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