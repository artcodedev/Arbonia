import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'

import getColorsData from '../api_utils/getColorsData'
import getConnectionsData from '../api_utils/getConnectionsData'
import getModelsData from '../api_utils/getModelsData'
import BlockHowReadModel from '../Components/blockHowReadModel/blockHowReadModel'
import PageHeader from '../Components/pageHeader/pageHeader'
import AboutArbonia from '../Components/pageMain/aboutArbonia'
import AboutManufacturer from '../Components/pageMain/aboutManufacturer'
import Advantages from '../Components/pageMain/advantages'
import { AllModels } from '../Components/pageMain/allModels'
import Bestsellers from '../Components/pageMain/bestsellers'
import { InStockModels } from '../Components/pageMain/inStockModels'
import Portfolio from '../Components/pageMain/portfolio'
import WhyMouseLite from '../Components/pageMain/whyMouseLite'
import PageTitle from '../Components/pageTitle/pageTitle'
import { ColorOrigin } from '../models/colorOrigin.model'
import { ConnectionOrigin } from '../models/connectionOrigin.model'
import { ModelOrigin } from '../models/modelOrigin.model'

import MainSlider from '../Components/mainslider/slider'
import Hero from '../Components/hero/hero'

type Props = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
}

const paddingX = { xs: '10px', md: '20px' }

const Home: NextPage<Props> = (props: Props) => {
	return (
		<Box>
			<PageHeader
				title={'Радиаторы Arbonia купить в Москве и Петербурге | доставка по Росси | Гарантия 10 лет'}
				description={
					'Радиаторы Arbonia в наличии и под заказ. Быстрая доставка в любой город России. Официальная гарантия 10 лет. В наличии наиболее популярные модели.'
				}
			/>
			<PageTitle
				header={'Радиаторы Arbonia с официальной гарантией 10 лет'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге в любой город России'}
			/>

			{/* <Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Трубчатые радиаторы Arbonia'}
				subheader={'Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ.'}
			/> */}
			<Box>

				<Typography variant='h4' component={'h1'} align='center' sx={{ marginTop: '50px' }} >
					Трубчатые радиаторы <span style={{ color: '#EF7D00', fontWeight: 600 }}>Arbonia</span>
				</Typography>

				<Typography style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.9 }}>
					Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ
				</Typography>

			</Box>

			<Box sx={{marginTop: '50px', marginBottom: '50px'}}>
				<MainSlider />
			</Box>







			<Box>
				<Box marginTop='50px' paddingX={paddingX} >
					<Bestsellers {...props} />
				</Box>

				<Box marginTop='50px' paddingX={{ xs: '10px', md: '40px' }}>
					<InStockModels />

					<Box marginTop='30px'>
						<BlockHowReadModel />
					</Box>

				</Box>

				<Box marginTop='50px' paddingX={paddingX } >
					<AboutArbonia />
				</Box>

				<Box marginTop='40px' paddingY='40px' sx={{ backgroundColor: '#e6e6e6' }}>
					<Box paddingX={paddingX }>
						<WhyMouseLite />
					</Box>
				</Box>

				<Box marginTop='50px' paddingX={{ xs: '20px', md: '30px' }} >
					<Advantages />
				</Box>

				<Box marginTop='40px' paddingY='40px' >
					<Box paddingX={{ xs: '20px', md: '20px' }}>
						<AboutManufacturer />
					</Box>
				</Box>

				<Box id='all-models' marginTop='-100px' paddingTop='50px' paddingX={paddingX} >
					<AllModels models={props.models} />
				</Box>

				<Box marginTop='40px' paddingX={paddingX} >
					<Portfolio />
				</Box>
			</Box>
		</Box>
	)
}

export async function getStaticProps() {
	const models: ModelOrigin[] = await getModelsData()
	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	return {
		props: {
			models,
			colors,
			connections,
		},
	}
}

export default Home
