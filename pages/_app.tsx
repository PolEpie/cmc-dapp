import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import * as gtag from '../lib/gtag';

import type { AppProps } from 'next/app';

import '../styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();


	useEffect(() => {
		const handleRouteChange = (url: string) => gtag.pageview(url);

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => router.events.off('routeChangeComplete', handleRouteChange);
	}, [router.events]);


	return (
		<Fragment>
			<Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />

			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
							function gtag() { dataLayer.push(arguments); }

							gtag('js', new Date());

							gtag('config', '${gtag.GA_TRACKING_ID}', {
								page_path: window.location.pathname,
							});`
				}}
			/>

			<Component {...pageProps} />
		</Fragment>
	);
}


export default App;