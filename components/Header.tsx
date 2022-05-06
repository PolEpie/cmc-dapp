import { onLinkClick } from '../lib';
import sideData from '../lib/site-data.json';


const Header: React.FC = () => (
	<header className='w-10/12 md:w-8/12 mt-[4vw]'>
		<nav>
			<ul className='relative flex justify-between text-[1.3vw] font-alata'>
				<li>
					<a href='#intro-section' className='group flex items-center justify-center'>
						<img src='/gems/1.png' alt='' className='absolute w-[12vw] opacity-50 group-hover:opacity-75 group-focus:opacity-75' />

						<span className='absolute w-max text-[#E3FF89] font-bold'>What is CMC?</span>
					</a>
				</li>

				<li>
					<a href='#faq-and-team-section' className='group flex items-center justify-center'>
						<img src='/gems/2.png' alt='' className='absolute h-[4vw] opacity-50 group-hover:opacity-75 group-focus:opacity-75' />

						<span className='absolute w-max text-[#E3FF89] font-bold'>FAQs</span>
					</a>
				</li>

				<li>
					<a href='#roadmap-section' className='group flex items-center justify-center'>
						<img src='/gems/3.png' alt='' className='absolute -top-[1.5vw] w-[10vw] opacity-50 group-hover:opacity-75 group-focus:opacity-75' />

						<span className='absolute w-max text-[#E3FF89] font-bold'>Roadmap</span>
					</a>
				</li>

				<li>
					<a href={sideData.links.whitepaper} target='_blank' rel='noreferrer' className='group flex items-center justify-center' onClick={onLinkClick.bind(null, 'Whitepaper')}>
						<img src='/gems/4.png' alt='' className='absolute h-[5vw] opacity-50 group-hover:opacity-75 group-focus:opacity-75' />

						<span className='absolute w-max text-[#E3FF89] font-bold'>Whitepaper</span>
					</a>
				</li>

				<li>
					<a href='#faq-and-team-section' className='group flex items-center justify-center'>
						<img src='/gems/5.png' alt='' className='absolute h-[4.5vw] opacity-50 group-hover:opacity-75 group-focus:opacity-75' />

						<span className='absolute w-max text-[#E3FF89] font-bold'>The Team</span>
					</a>
				</li>
			</ul>
		</nav>
	</header>
);


export default Header;