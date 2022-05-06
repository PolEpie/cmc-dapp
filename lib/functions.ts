import { gtag } from '../lib';


function onLinkClick(link: string) {
    gtag.event({
        action: 'link_click',
        category: 'engagement',
        label: 'User clicked on a link',
        value: link
    });
}


export { onLinkClick };