const AboutUs: React.FC = () => (
	<>
		<h2 className='absolute bottom-[26vw] right-[15vw] w-[13vw] text-[1.5vw] text-white'>
			<div className='relative'>
				<img src='/boxes/5.png' alt='' className='w-full opacity-90' />

				<span className='absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2'>What is CMC?</span>
			</div>
		</h2>

		<div className='absolute bottom-[5vw] right-[3vw]'>
			<div className='relative w-[36vw]'>
				<img src='/boxes/0.png' alt='' className='w-full opacity-90' />

				<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[2.5vw] ml-[3vw] text-[1vw] text-white'>
					<p>
						CryptoMiningClub is a <span className='text-[#E3FF89]'>10,005</span> piece NFT project originating on the ETH blockchain. Our goal is to raise capital through minting to create the <span className='text-[#C59DE1]'>CMC Mining Rig</span>.
					</p>

					<p>
						Profits from mining go to the Community Rewards Wallet, where the community can choose how to reinvest or <span className='text-[#9DE1A8]'>distribute the rewards</span>.
					</p>

					<p>
						Owning a CryptoMiningClub NFT also places you as a member in the Club Benefits Program. This program rewards NFT holders and provides huge additional utilities which includes access to <span className='text-[#E39E9E]'>hosting services</span>.
					</p>
				</div>
			</div>
		</div>
	</>
);


export default AboutUs;