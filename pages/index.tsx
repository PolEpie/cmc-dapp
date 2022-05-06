import { useEffect } from 'react';
import Head from 'next/head';

import { Header, AboutUs, TheTeam, FAQs } from '../components';
import { gtag, onLinkClick } from '../lib';
import siteData from '../lib/site-data.json';

import type { NextPage } from 'next';


const Index: NextPage = () => {
	useEffect(() => {
		const sections = document.querySelectorAll('section[id]');
		const alreadyViewedSections: string[] = [];

		function onScroll() {
			sections.forEach(element => {
				const rect = element.getBoundingClientRect();
				const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

				if (rect.bottom < 0 || rect.top - viewHeight >= 0) return;


				const { id } = element;

				if (alreadyViewedSections.includes(id)) return;
				else alreadyViewedSections.push(id);

				gtag.event({
					action: 'scrolled_to',
					category: 'engagement',
					label: 'User scrolled to a new section',
					value: id
				});
			});
		}


		onScroll();

		window.addEventListener('scroll', onScroll);


		() => window.removeEventListener('scroll', onScroll);
	}, []);


	return (
		<>
			<Head>
				<title>Crypto Mining Club</title>

				<meta name='title' content='Crypto Mining Club' />
				<meta name='description' content={siteData.description} />
				<meta name='keywords' content='nft,nfts,dao,ethereum,kadena,eth,kda,cmc,crypto mining club' />

				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />

				<meta name='theme-color' content='#98EEEF' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
				<meta property='og:title' content='Crypto Mining Club' />
				<meta property='og:image' content='/banner.png' />
				<meta property='og:description' content={siteData.description} />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:site' content='@CryptoMiningLLC' />
				<meta property='twitter:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
				<meta property='twitter:title' content='Crypto Mining Club' />
				<meta property='twitter:image' content='/banner.png' />
				<meta property='twitter:description' content={siteData.description} />
			</Head>


			<main className='flex flex-col items-center bg-homepage-img bg-cover bg-no-repeat'>
				<section className='section flex flex-col items-center h-[63vw]' id='welcome-section'>
					<Header />

					<div className='absolute flex items-center justify-center top-[44.5%] right-[3%] w-[21.7%] h-[20.2%]'>
						<h2 className='text-[2vw] font-bold text-center'>{siteData.announcement}</h2>
					</div>
				</section>


				<section className='section h-[34vw]' id='links-section'>
					<div>
						<a
							href={siteData.links.alphaVerify}
							target='_blank'
							rel='noreferrer'
							className='absolute flex items-center justify-center top-[26.5%] left-[5.1%] w-[18vw] h-[18vw] hover:opacity-75'
							onClick={onLinkClick.bind(null, 'Alpha Verify')}
							title='Alpha Verify'
						>
							<img src='/icons/alpha-verified.png' alt='Alpha Verified' />
						</a>
					</div>

					<div>
						<a
							href={siteData.links.twitter}
							target='_blank'
							rel='noreferrer'
							className='absolute flex items-center justify-center p-[0.8vw] top-[22.5%] right-[6.2%] w-[5vw] h-[5vw] opacity-60
									   brightness-0	invert hover:brightness-100 hover:invert-0 hover:opacity-100'
							onClick={onLinkClick.bind(null, 'Twitter')}
							title='Twitter'
						>
							<img src='/icons/twitter.png' alt='Twitter' />
						</a>

						<a
							href={siteData.links.discord}
							target='_blank'
							rel='noreferrer'
							className='absolute flex items-center justify-center p-[0.8vw] top-[45.6%] right-[6.2%] w-[5vw] h-[5vw] opacity-60
									   brightness-0	invert hover:brightness-100 hover:invert-0 hover:opacity-100'
							onClick={onLinkClick.bind(null, 'Discord')}
							title='Discord'
						>
							<img src='/icons/discord.png' alt='Discord' />
						</a>

						<a
							href={siteData.links.openSea}
							target='_blank'
							rel='noreferrer'
							className='absolute flex items-center justify-center p-[0.8vw] top-[68%] right-[6.2%] w-[5vw] h-[16%] opacity-60
									   brightness-0	invert hover:brightness-100 hover:invert-0 hover:opacity-100'
							onClick={onLinkClick.bind(null, 'OpenSea')}
							title='OpenSea'
						>
							<img src='/icons/opensea.png' alt='OpenSea' />
						</a>
					</div>
				</section>


				<section className='section relative flex flex-col items-center h-[66vw]' id='intro-section'>
					<AboutUs />

					<TheTeam />
				</section>


				<section className='section h-[105vw]' id='roadmap-section'>
					<ul>
						<li
							className='absolute flex flex-col top-[9.7%] left-[5%] w-[33.7%] h-[17%] text-[1.2vw]'
						>
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

						<li
							className='absolute flex flex-col top-[30.7%] right-[5%] w-[33.7%] h-[17%] text-[1.2vw]'
						>
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

						<li
							className='absolute flex flex-col bottom-[29%] left-[5%] w-[33.7%] h-[17%] text-[1.2vw]'
						>
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

						<li
							className='absolute flex flex-col bottom-[8.4%] right-[5%] w-[33.7%] h-[17%] text-[1.2vw]'
						>
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
				</section>


				<section className='section relative h-[68vw]' id='faqs-section'>
					<FAQs />
				</section>
			</main>
		</>
	);
}


export default Index;