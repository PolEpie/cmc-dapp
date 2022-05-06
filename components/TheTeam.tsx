const TheTeam: React.FC = () => (
	<>
		<h2 className='absolute top-[7vw] right-[16vw] w-[13vw] text-[2vw] text-white'>
			<div className='relative'>
				<img src='/boxes/5.png' alt='' className='w-full opacity-90' />

				<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max'>The Team</span>
			</div>
		</h2>

		<ul className='absolute top-[14vw] right-[3vw] flex flex-col gap-[1vw]'>
			<li className='relative w-[36vw]'>
				<img src='/boxes/team1.png' alt='' className='w-full opacity-90' />

				<div className='absolute flex items-center justify-center top-0 left-0 w-full h-full p-[2vw] text-[1vw] text-white'>
					<div className='flex-grow flex flex-col items-center gap-[1vw] w-1/3'>
						<a href='https://www.linkedin.com/in/william-bruce-ross-489376224/' target='_blank' rel='noreferrer' className='text-[#C59DE1] text-[1.1vw] hover:underline'>
							William Bruce-Ross
						</a>

						<img src='/team/william.png' alt='' className='w-3/4 rounded-sm' />

						<span>Founder</span>
					</div>

					<p className='w-2/3'>
						Bruce is a student at the US Merchant Marine Academy where he studies Marine Engineering. He owned a landscaping business previous to CMC which he grew and operated for about 8 years. This experience in idea development and project planning earned him a role of project maganer in CMC.
					</p>
				</div>
			</li>

			<li className='relative w-[36vw]'>
				<img src='/boxes/team2.png' alt='' className='w-full opacity-90' />

				<div className='absolute flex items-center justify-center top-0 left-0 w-full h-full p-[2vw] text-[1vw] text-white'>
					<div className='flex-grow flex flex-col items-center gap-[1vw] w-1/3'>
						<a href='https://www.linkedin.com/in/david-knapp-ba2525228/' target='_blank' rel='noreferrer' className='text-[#9DE1A8] text-[1.1vw] hover:underline'>
							David Knapp
						</a>

						<img src='/team/david.png' alt='' className='w-3/4 rounded-sm' />

						<span>Co-Founder</span>
					</div>

					<p className='w-2/3'>
						David is an insulator for Nuclear Vessels. Previous to CMC, he ran multiple online ecommerce stores where he achieved over six-figures in sales. In addition, David boast a deep level of knowledge on crypto and PC hardware. He is our lead hardware engineer managing our mining rigs.
					</p>
				</div>
			</li>

			<li className='relative w-[36vw]'>
				<img src='/boxes/team3.png' alt='' className='w-full opacity-90' />

				<div className='absolute flex items-center justify-center top-0 left-0 w-full h-full p-[2vw] text-[1vw] text-white'>
					<div className='flex-grow flex flex-col items-center gap-[1vw] w-1/3'>
						<a href='https://twitter.com/petdomaa100' target='_blank' rel='noreferrer' className='text-[#E3FF89] text-[1.1vw] hover:underline'>
							Domi Petocz
						</a>

						<img src='/team/domi.png' alt='' className='w-3/4 rounded-sm' />

						<span>Lead Developer</span>
					</div>

					<p className='w-2/3'>
						Domi is a blockchain developer currently employed at a multinational blockchain agency. He works full time on top NFT projects and other blockchain related dApps. Because of this, he is our Web Developer and Smart Contract Engineer.
					</p>
				</div>
			</li>
		</ul>
	</>
);


export default TheTeam;