import siteData from '../lib/site-data.json';


const Roadmap: React.FC = () => (
	<>
		<h2 className='absolute top-[1vw] left-1/2 -translate-x-1/2 w-[13vw] text-[2vw] text-white'>
			<div className='relative'>
				<img src='/boxes/5.png' alt='' className='w-full opacity-90' />

				<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Roadmap</span>
			</div>
		</h2>

		<ul>
			<li className='absolute flex flex-col top-[9.7%] left-[5%] w-[33.7%] h-[17%] text-[1.2vw]'>
				<div className='text-center mb-[2vw] text-[#9DE1A8] font-bold'>Stage 1</div>

				<div className='relative flex-grow'>
					<div className='text-center text-[#9DE1A8] font-bold uppercase'>{siteData.roadmap[0].title}</div>

					<span className='absolute top-0 right-0 text-[#9DE1A8] font-bold uppercase'>{siteData.roadmap[0].date}</span>

					<ul className='flex flex-col gap-[1vw] text-white mt-[1vw] px-[4vw]'>
						{siteData.roadmap[0].items.map((text, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: text }} />
						))}
					</ul>
				</div>
			</li>

			<li className='absolute flex flex-col top-[30.7%] right-[5%] w-[33.7%] h-[17%] text-[1.2vw]'>
				<div className='relative right-[1vw] text-center mb-[2.5vw] text-[#C59DE1] font-bold'>Stage 2</div>

				<div className='relative right-[1vw] flex-grow'>
					<div className='text-center text-[#C59DE1] font-bold uppercase'>{siteData.roadmap[1].title}</div>

					<span className='absolute top-0 right-0 text-[#C59DE1] font-bold uppercase'>{siteData.roadmap[1].date}</span>

					<ul className='relative -right-[1vw] flex flex-col gap-[1vw] text-white mt-[1.5vw] ml-[1vw] pr-[2vw] pl-[1vw] h-[9vw] overflow-y-scroll
									scrollbar direction-rtl'>
						{siteData.roadmap[1].items.map((text, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: text }} className='direction-ltr' />
						))}
					</ul>
				</div>
			</li>

			<li className='absolute flex flex-col bottom-[29%] left-[5%] w-[33.7%] h-[17%] text-[1.2vw]'>
				<div className='relative right-[0.7vw] text-center mb-[2vw] text-[#E39E9E] font-bold'>Stage 3</div>

				<div className='relative flex-grow'>
					<div className='text-center text-[#E39E9E] font-bold uppercase'>{siteData.roadmap[2].title}</div>

					<span className='absolute top-0 right-0 text-[#E39E9E] font-bold uppercase'>{siteData.roadmap[2].date}</span>

					<ul className='flex flex-col gap-[1vw] text-white mt-[1vw] px-[4vw]'>
						{siteData.roadmap[2].items.map((text, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: text }} />
							
						))}
					</ul>
				</div>
			</li>

			<li className='absolute flex flex-col bottom-[8.4%] right-[5%] w-[33.7%] h-[17%] text-[1.2vw]'>
				<div className='relative right-[0.7vw] text-center mb-[2vw] text-[#9DE1A8] font-bold'>Stage 4</div>

				<div className='relative top-[0.5vw] right-[1vw] flex-grow'>
					<div className='text-center text-[#9DE1A8] font-bold uppercase'>{siteData.roadmap[3].title}</div>

					<span className='absolute top-0 right-0 text-[#9DE1A8] font-bold uppercase'>{siteData.roadmap[3].date}</span>

					<ul className='flex flex-col gap-[1vw] text-white mt-[1vw] px-[4vw]'>
						{siteData.roadmap[3].items.map((text, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: text }} />
						))}
					</ul>
				</div>
			</li>
		</ul>
	</>
);


export default Roadmap;