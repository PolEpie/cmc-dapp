const TheTeam: React.FC = () => (
	<div className='absolute bottom-[5vw] flex justify-between w-full px-[2vw]' id='team-section'>
		<div className='relative w-[36vw]'>
			<img src='/boxes/team1.png' alt='' className='w-full opacity-90' />

			<div className='absolute flex items-center justify-center top-0 left-0 w-full h-full p-[2vw] text-[1vw] text-white'>
				<div className='flex-grow flex flex-col items-center gap-[1vw] w-1/3'>
					<a href='https://www.linkedin.com/in/william-bruce-ross-489376224/' target='_blank' rel='noreferrer' className='text-[#9DE1A8] hover:underline'>William Bruce-Ross</a>

					<img src='/team/william.png' alt='' className='w-3/4 rounded-sm' />

					<span>Founder</span>
				</div>

				<p className='w-2/3'>
					Student at the US Merchant Marine Academy where he studies Marine Engineering. Bruce owned a landscaping business previous to CMC which he grew and operated for 8 years. He is experienced in idea development and project planning which have been vital for the growth of Crypto Mining Club.
				</p>
			</div>
		</div>

		<div className='relative w-[36vw]'>
			<img src='/boxes/team2.png' alt='' className='w-full opacity-90' />

			<div className='absolute flex items-center justify-center top-0 left-0 w-full h-full p-[2vw] text-[1vw] text-white'>
				<div className='flex-grow flex flex-col items-center gap-[1vw] w-1/3'>
					<a href='https://www.linkedin.com/in/david-knapp-ba2525228/' target='_blank' rel='noreferrer' className='text-[#E3FF89] hover:underline'>David Knapp</a>

					<img src='/team/david.png' alt='' className='w-3/4 rounded-sm' />

					<span>Co-Founder</span>
				</div>

				<p className='w-2/3'>
					David is an insulator for Nuclear Vessels. Previous to CMC, he ran multiple online ecommerce stores where he achieved over six-figures in sales. In addition, David boast a deep level of knowledge on crypto and PC building as well, this was instrumental when he began exploring the crypto mining space. In his free time you can find him building GPU mining rigs.
				</p>
			</div>
		</div>
	</div>
);


export default TheTeam;
