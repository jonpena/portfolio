module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{svg,webp,png,js,css,html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};