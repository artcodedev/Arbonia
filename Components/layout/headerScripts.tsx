import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { YMInitializer } from 'react-yandex-metrika'

type HeaderScriptsProps = {}

const HeaderScripts: React.FC<HeaderScriptsProps> = () => {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<noscript>
				<div>
					JavaScript is not suppords
				</div>
			</noscript>

		</>
	)
}
	
export default HeaderScripts
