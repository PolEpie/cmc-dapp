module.exports = {
	content: [ './**/*.tsx' ],
	theme: {
		extend: {
			colors: {
				'lightblue': '#98EEEF'
			},
			fontFamily: {
				'josefin-sans': [ 'Josefin Sans', 'sans-serif' ],
				'alata': [ 'Alata', 'sans-serif' ]
			},
			backgroundImage: {
				'homepage-img': "url('/backgrounds/homepage.png')",
				'mintpage-img': "url('/backgrounds/mintpage.png')",
			}
		}
	},
	plugins: []
}