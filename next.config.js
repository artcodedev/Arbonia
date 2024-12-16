/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: '/arbonia-radiators',
				destination: '/',
				permanent: true,
			},
			{
				source: '/catalog/2180-stock',
				destination: '/models/2180',
				permanent: true,
			},
			{
				source: '/catalog',
				destination: '/',
				permanent: true,
			},
		]
	},
	
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'cache-control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		]
	},
}
