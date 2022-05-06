const AboutUs: React.FC = () => (
	<div className='absolute top-[5vw] right-[5vw]'>
		<div className='relative w-[36vw]'>
			<img src='/boxes/0.png' alt='' className='w-full opacity-90' />

			<div className='absolute top-0 left-0 flex flex-col gap-[0.7vw] m-[2.5vw] ml-[3vw] text-[1vw] text-white'>
				<p>
					CryptoMiningClub is a <span className='text-[#E3FF89]'>10,005</span> piece NFT project originating on the ETH blockchain. Capital raised through minting will go to create the <span className='text-[#C59DE1]'>CMC Mining Rig</span>.
				</p>

				<p>
					Profits from mining go to the community rewards wallet which the community can choose how to reinvest or <span className='text-[#9DE1A8]'>distribute the rewards</span>.
				</p>

				<p>
					Owning a CryptoMiningClub NFT also places you as a member in the Club Benefits Program. This program rewards NFT holders and provides huge additional utilities which include access to <span className='text-[#E39E9E]'>hosting services</span>.
				</p>
			</div>
		</div>
	</div>
);


export default AboutUs;