const RAQs: React.FC = () => {
	return (
		<>
			<h2 className='absolute top-[7vw] left-[13vw] w-[13vw] text-[2vw] text-white'>
				<div className='relative'>
					<img src='/boxes/5.png' alt='' className='w-full opacity-90' />

					<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>FAQs</span>
				</div>
			</h2>

			<ul className='absolute top-[14vw] left-[3vw] flex flex-col gap-[2vw]'>
				<li>
					<div className='relative w-[30vw]'>
						<img src='/boxes/1.png' alt='' className='w-full opacity-90' />

						<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[1.5vw] ml-[1.8vw] text-[0.9vw] text-white'>
							<div className='text-[#9DE1A8]'>What coin do you plan to mine?</div>

							<p>
								We will be mining Kadena. Once the reward wallet grows, the community will vote on what other mineable cryptocurrencies the company should expand mining operations into.
							</p>
						</div>
					</div>
				</li>

				<li>
					<div className='relative w-[30vw]'>
						<img src='/boxes/5.png' alt='' className='w-full opacity-90' />

						<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[1.5vw] ml-[1.8vw] text-[0.9vw] text-white'>
							<div className='text-[#E3FF89]'>How much crypto is generated?</div>

							<p>
								We estimate that we will generate over $250,000 in KDA per month in the infancy stages of the CMC Mining Rig. We will add those rewards to the Community Rewards Wallet and let the CMC holders decide how to reinvest or reward the community.
							</p>
						</div>
					</div>
				</li>

				<li>
					<div className='relative w-[35vw]'>
						<img src='/boxes/6.png' alt='' className='w-full opacity-90' />

						<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[1.5vw] ml-[1.8vw] text-[0.9vw] text-white'>
							<div className='text-[#C59DE1]'>When &amp; How do I get rewarded?</div>

							<p>
								Our mining operation yields rewards that we put a majority of it into the Community Rewards Wallet. From here, the CryptoMiningClub holders will get to vote on how these rewards are utilized to grow the project, expand mining operations, and ultimately reward the holders.<br />Claimable ether payouts are going to be distributed with our smart contract. Funds can be deposited into the contract, which will allow CMC holders to claim their share, ensuring equal and fair reward distribution.
							</p>
						</div>
					</div>
				</li>

				<li>
					<div className='relative w-[30vw]'>
						<img src='/boxes/4.png' alt='' className='w-full opacity-90' />

						<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[1.5vw] mt-[1.8vw] ml-[1.8vw] text-[0.9vw] text-white'>
							<div className='text-[#9DE1A8]'>Does my CMC NFT give me ownership to mining hardware?</div>

							<p>
								Owning a CMC NFT does not give you any ownership in mining hardware, hash power rates, and promises no expectation of profit to any CMC holders.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</>
	);
}


export default RAQs;