import type { ExternalProvider } from '@ethersproject/providers/src.ts/web3-provider';


declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_GA_ID: string;
			NEXT_PUBLIC_CONTRACT_ADDRESS: string;
			NEXT_PUBLIC_INFURA_KEY: string;
			NEXT_PUBLIC_VERCEL_URL: string;
			NEXT_PUBLIC_COUNTDOWN_TIMESTAMP: string;
		}
	}

	interface Window {
		web3?: unknown;
		ethereum?: ExternalProvider;
	}
}