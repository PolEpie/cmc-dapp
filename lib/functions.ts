import { gtag } from '../lib';


function onLinkClick(link: string) {
    gtag.event({
        action: 'link_click',
        category: 'engagement',
        label: 'User clicked on a link',
        value: link
    });
}

function formatDuration(ms: number) {
	const differenceInSeconds = ms / 1000;

	let days = Math.floor(differenceInSeconds / 60 / 60 / 24).toString();
	let hours = Math.floor(differenceInSeconds / 60 / 60 % 24).toString();
	let minutes = Math.floor(differenceInSeconds / 60 % 60).toString();
	let seconds = Math.floor(differenceInSeconds % 60).toString();

	return {
		d: days,
		h: hours,
		m: minutes,
		s: seconds
	};
}


export { onLinkClick, formatDuration };