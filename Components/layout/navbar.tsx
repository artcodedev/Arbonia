import { NextComponentType } from 'next'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Hidden, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import Container from '@mui/material/Container'

import Drawer from '@mui/material/Drawer';

// import trackEvent from '../../utils/trackEvent'

import * as styles from '../../styles/styles'
import { menuButton, menuButtonDropDown } from '../../styles/stylesNavbarFooter'
import global from '../../variables/global'


import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SmsIcon from '@mui/icons-material/Sms';

type NavbarProps = {}

interface MenuItemData {
    title: string
	path: string
    icon:  JSX.Element
}

export const MenuItem: MenuItemData[] = [
	{
		title: 'Главная',
		path: '/',
		icon: <PaidIcon />
	},
	{
		title: "О магазине",
		path: '/about',
		icon: <AccountBalanceIcon />
	},
	{
		title: 'Покраска',
		path: '/coloring', 
		icon: <AccountBalanceIcon />
	},

	{
		title: 'Доставка и оплата',
		path: '/delivery',
		icon: <SmsIcon />
	},
	{
		title: 'Запрос на радиаторы',
		path: '/request',
		icon: <SmsIcon />
	},
	{
		title: 'Информация',
		path: '/articles',
		icon: <SmsIcon />
	},
	{
		title: 'Новости',
		path: '/news',
		icon: <SmsIcon />
	},
	{
		title: 'Вопрос-Ответ',
		path: '/articles/faq',
		icon: <SmsIcon />
	}
];

const hover_menu = {
	'&:hover': {
		background: 'rgba(25, 118, 210, 0.22)'
	}
}

const Navbar: NextComponentType<NavbarProps> = () => {

	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [checkMenuItem, setCheckMenuItem] = useState<number | null>(null)

	const toggleDrawer = (newOpen: boolean) => (): void => { setOpenDrawer(newOpen); };

	const checkMenu = (item: number) => {
		console.log(item)
		setCheckMenuItem(item)
	}


	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = () => {
		setOpenDrawer(true);

	}

	return (

		<>
			<Drawer open={openDrawer} onClose={toggleDrawer(false)} sx={{background: '#f000', backdropFilter: 'blur(30px)'}}>

				<Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>

					<List>

						{MenuItem.map((e, i) => <ListItem key={e.title} disablePadding  >

							<Link href={e.path}>

								<ListItemButton onClick={() => checkMenu(i)} selected={checkMenuItem === i} sx={hover_menu}>

									<ListItemIcon>{e.icon}</ListItemIcon>
									<ListItemText primary={e.title} />

								</ListItemButton>
							</Link>

						</ListItem>)}

					</List>

				</Box>
			</Drawer>

			<AppBar sx={styles.navbar} >

				<Container maxWidth='xl'>
					<Toolbar disableGutters itemScope itemType='https://schema.org/SiteNavigationElement' sx={{display: 'flex', justifyContent: 'space-between'}}>


						<Box>
							<IconButton size='large' aria-label='Меню' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} >
								<MenuIcon />
							</IconButton>
						</Box>

						<Box>
							<Link href='/'>
								<a>
									<img src='/images/logo.png' alt='Логотип Arbonia' width={102} height={50} />
								</a>
							</Link>
						</Box>

						<Box>
							<Typography variant='body1' sx={{ ...styles.standardText }} >
								<Link href={`tel:${global.phone495}`}>

									<a style={{ textDecoration: 'none' }} >
										<Typography sx={{ ...styles.standardTextLink }} component='span'>
											{global.phone495String}
										</Typography>
									</a>

								</Link>
								<br />
								<Link href={`tel:${global.phone812}`}>

									<a style={{ textDecoration: 'none' }}>
										<Typography sx={{ ...styles.standardTextLink }} component='span' >
											{global.phone812String}
										</Typography>
									</a>

								</Link>
							</Typography>
						</Box>

					</Toolbar>
				</Container>
			</AppBar>
		</>

	)
}

export default Navbar
