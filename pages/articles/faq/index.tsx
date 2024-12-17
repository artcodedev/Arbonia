import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Hero from '../../../Components/hero/hero'
import PageHeader from '../../../Components/pageHeader/pageHeader'
import PageTitle from '../../../Components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#555',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));
interface DataRows {
	alum: string,
	arbonia3057: string,
	arbonia2180: string,
	arbonia3180: string,
}



type ArticlePageProps = {}

const rows: DataRows[] = [
	{
		alum: 'Алюминиевый <br /> радиатор',
		arbonia3057: '5 секций <br /> 430 мм <br /> 790 Вт',
		arbonia2180: '5 секций <br /> 251 мм <br /> 820 Вт',
		arbonia3180: '4 секции <br /> 206 мм <br /> 876 Вт'
	},
	{
		alum: '6 секций <br /> 510 мм <br /> 948 Вт',
		arbonia3057: '12 секций <br /> 566 мм <br /> 936 Вт',
		arbonia2180: '6 секций <br /> 296 мм <br /> 984 Вт',
		arbonia3180: '4 секции <br /> 206 мм <br /> 876 Вт'
	},

	{
		alum: '6 секций <br /> 510 мм <br /> 948 Вт',
		arbonia3057: '7 секций <br /> 590 мм <br /> 1106 Вт',
		arbonia2180: '14 секций <br /> 656 мм <br /> 1092 Вт',
		arbonia3180: '7 секции <br /> 351 мм <br /> 1158 Вт'
	},
	{
		alum: '8 секций <br /> 670 мм <br /> 1148 Вт',
		arbonia3057: '16 секций <br /> 746 мм <br /> 1248 Вт',
		arbonia2180: '8 секций <br /> 386 мм <br /> 1312 Вт',
		arbonia3180: '6 секций <br /> 296 мм <br /> 1314 Вт'
	},
	{
		alum: '9 секций <br /> 750 мм <br /> 1422 Вт',
		arbonia3057: '18 секций <br /> 836 мм <br /> 1404 Вт',
		arbonia2180: '9 секций <br /> 431 мм <br /> 1476 Вт',
		arbonia3180: '6 секций <br /> 296 мм <br /> 1314 Вт'
	},
	{
		alum: '10 секций <br /> 830 мм <br /> 1058 Вт',
		arbonia3057: '20 секций <br /> 926 мм <br /> 1590 Вт',
		arbonia2180: '10 секций <br /> 481 мм <br /> 1476 Вт',
		arbonia3180: '7 секций <br /> 341 мм <br /> 1533 Вт'
	}
  ];

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Радиаторы Arbonia: ответы на частые вопросы про радиаторы Arbonia'}
				description={
					'Собрали наиболее частые вопросы, которые нам задают про радиаторы Arbonia, и подготовили на них ответы. Где можно устанавливать радиаторы Arbonia? Где их производят? Какое давление они выдерживают? И т.д.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{ title: 'Радиаторы Arbonia: ответы на частые вопросы', link: '/articles/faq' },
				]}
			/>
			<Hero imgPath={'/images/sliders/slide-5.jpeg'} header={'Ответы на часто задаваемые вопросы про радиаторы Arbonia'} />
			<Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }} itemScope >

				<Box sx={{ marginTop: '10px' }}>

					<Accordion  >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>Где производят радиаторы Arbonia?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='10px'>
								Холдинг, который управляет брендом Arbonia, располагает несколькими производственными мощностями. Завод,
								расположенный в городе Стршибро, Чехия, специализируется на изготовлении трубчатых радиаторов для систем
								отопления.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>Какие вертикальные радиаторы Arbonia поддерживаются в наличии?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<Typography sx={{ ...styles.standardText }} marginY='10px' >
									На складе постоянно поддерживаются радиаторы{' '}
									<Link href='/models/2180'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span' >
											Arbonia 2180
										</Typography>
									</Link>{' '}
									и{' '}
									<Link href='/models/3180'>
										<Typography sx={{ ...styles.standardTextRedLink }} component='span' >
											Arbonia 3180
										</Typography>
									</Link>{' '}
									- это батареи высотой 180 см в 2-трубчатом и 3-трубчатом исполнении. Вы можете приобрести радиаторы как
									с нижним, так и с боковым подключением. В большинстве случаев подходит модель 2180. Но если вам
									требуется более мощный радиатор, то следует обратить внимание на Arbonia 3180.
								</Typography>
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Какие вертикальные радиаторы Arbonia поддерживаются в наличии?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='10px'>
								Холдинг, который управляет брендом Arbonia, располагает несколькими производственными мощностями. Завод,
								расположенный в городе Стршибро, Чехия, специализируется на изготовлении трубчатых радиаторов для систем
								отопления.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Подходят ли радиаторы Arbonia для центрального отопления?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								Радиаторы Arbonia подходят как для установки в многоквартирные дома с централизованной системой
								отопления, так и для использования в частных домах с собственным отопительным котлом. Они предназначены
								для работы в системах с закрытым контуром, где отсутствует прямой доступ кислорода к воде.
							</Typography>
							<Typography
								sx={{ ...styles.standardText }}
								marginY='20px'
							>
								В обычных условиях работы центральной отопительной системы давление обычно не превышает 8 атмосфер.
								Однако радиаторы спроектированы таким образом, что могут непрерывно работать при давлении до 10 атмосфер
								и выдерживать кратковременные повышения до 16 атмосфер, что обеспечивает их надежность и долговечность в
								широком диапазоне рабочих условий.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Как соотносятся мощности радиаторов Arbonia c алюминиевыми или биметаллическими радиаторами?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.smallText }} marginY='20px' >

								<TableContainer component={Paper} sx={{minWidth: '100%'}}>

									<Table aria-label="customized table">
										<TableHead>
											<TableRow>
												<StyledTableCell>Алюминиевый радиатор</StyledTableCell>
												<StyledTableCell>Arbonia 3057</StyledTableCell>
												<StyledTableCell>Arbonia 2180</StyledTableCell>
												<StyledTableCell>Arbonia 3180</StyledTableCell>
											</TableRow>
										</TableHead>

										<TableBody>
											{rows.map((row) => (
												<StyledTableRow key={row.alum}>
													<StyledTableCell component="th" scope="row" dangerouslySetInnerHTML={{__html: row.alum}} />
													<StyledTableCell component="th" scope="row" dangerouslySetInnerHTML={{__html: row.arbonia3057}} />
													<StyledTableCell component="th" scope="row" dangerouslySetInnerHTML={{__html: row.arbonia2180}} />
													<StyledTableCell component="th" scope="row" dangerouslySetInnerHTML={{__html: row.arbonia3180}} />
												</StyledTableRow>
											))}
										</TableBody>

									</Table>
								</TableContainer>

							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Возможно ли радиусное исполнение радиаторов Arbonia?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Радиусное исполнение радиаторов Arbonia предполагает индивидуальный подход к каждому заказу, начиная с
								точного замера радиуса стены на месте установки и заканчивая контрольной проверкой утвержденного шаблона
								перед началом производства. Этот процесс гарантирует, что радиатор будет идеально соответствовать
								кривизне стены и интерьеру помещения. Особенностью является то, что каждый этап требует участия
								квалифицированных специалистов, от замерщика до инженеров конструкторского бюро, что, безусловно, влияет
								на стоимость и сроки изготовления такого радиатора.
								<Box textAlign={'center'} marginTop='20px' >
									<img
										style={{ width: '100%' }}
										src='/images/articles/radius1.png'
										alt='Радиатор Arbonia в радиусном исполнении'
									// width={502}
									// height={213}
									/>
								</Box>
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Какое должно быть расстояние радиатора от стены?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px'>
								Установка радиатора на рекомендованном минимальном расстоянии от стены позволяет достичь оптимального
								теплообмена и распределения воздуха в помещении.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								На выбор кронштейнов влияет не только тип радиатора (количество трубок), но и необходимое расстояние от
								стены. Кронштейны с фиксированной глубиной установки (ZB 0251, ZB 0257, ZB 0280) подойдут, если точно
								известно расстояние, необходимое для установки радиатора. В то же время, кронштейны с регулируемой
								глубиной (W161, W162, W163, W164) предоставляют большую гибкость при монтаже, позволяя адаптировать
								установку под конкретные условия и требования к расстоянию от стены.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Для разных типов радиаторов требуются разные минимальные расстояния от стены, что связано с их тепловой
								мощностью и способностью к распределению тепла в помещении. Чем больше количество трубок в радиаторе,
								тем больше места необходимо для обеспечения эффективного теплообмена, поскольку более массивные
								радиаторы генерируют и распределяют больше тепла. Эти рекомендации помогают обеспечить, чтобы радиаторы
								работали наиболее эффективно, не теряя тепловую мощность из-за слишком близкого расположения к стене.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Какое нужно расстояние от пола и от подоконника?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Соблюдение минимального расстояния как от подоконника, так и от пола гарантирует, что воздух свободно
								циркулирует вокруг радиатора, что способствует более эффективному распределению тепла.
								<ul>
									<li>
										<strong>От подоконника до радиатора</strong>: Минимум 10 см расстояние позволяет горячему воздуху
										подниматься от радиатора вверх, не создавая теплового затора под подоконником. Это уменьшает риск
										конденсации и повышает эффективность отопления.
									</li>
									<li>
										<strong>От пола до радиатора</strong>: Такое же минимальное расстояние в 10 см обеспечивает
										адекватную циркуляцию воздуха под радиатором, что способствует более равномерному распределению
										тепла по комнате. Это также позволяет удобно убирать пыль и грязь, которые могут скапливаться под
										радиатором.
									</li>
								</ul>
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Возможно ли проходное подключение радиаторов Arbonia?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Последовательное подключение нескольких радиаторов Arbonia – это распространенный метод в системах
								отопления, позволяющий эффективно распределять тепло в нескольких помещениях или в большом пространстве.
								Использование проходных радиаторов и комплектующих, таких как переходники с отбортовкой и прокладки,
								обеспечивает герметичность и надежность такого подключения.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Выбор между 1/2" и 3/4" зависит от расчетной тепловой мощности системы и требуемого расхода воды через
								радиаторы. Более крупный диаметр позволяет обеспечить больший расход и, соответственно, может быть
								предпочтителен для систем с высокой тепловой нагрузкой.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Как работает циркуляция теплоносителя в радиаторах большой длины?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Когда радиатор получается особенно длинным (1500 мм и более), без дополнительных мер может произойти
								снижение эффективности отопления из-за недостаточного распределения горячей воды по всей его длине. В
								таких случаях внутрь радиатора устанавливается трубка-удлинитель, которая помогает воде равномерно
								распределиться, повышая тем самым общую теплоотдачу радиатора.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Длина трубки составляет 2/3 от длины радиатора, что позволяет горячей воде достигать дальних участков
								радиатора, тем самым улучшая его теплоотдачу и обеспечивая более равномерный нагрев помещения.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Возможна ли покраска радиаторов в свой цвет?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Вы можете выбрать между заказом радиатора прямо с завода в нужном цвете, что может занять от 2 до 4
								месяцев, либо воспользоваться услугой покраски радиаторов в выбранный цвет из палитры RAL, что
								значительно быстрее – всего 1-2 недели.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Основные преимущества стальных трубчатых радиаторов?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Стальные трубчатые радиаторы обладают множеством преимуществ, делающих их идеальным выбором для
								современного жилища. Одно из ключевых преимуществ — это полностью автоматизированное производство,
								исключающее человеческий фактор, что гарантирует высокое качество и однородность каждого изделия. Эти
								радиаторы предлагаются в широком ассортименте типоразмеров: высота варьируется от 19 до 300 см,
								количество трубок в секции — от 2 до 6, а число секций может достигать от 2 до 50. Такой разнообразный
								выбор позволяет подобрать радиатор для любого пространства и тепловых нужд.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Порошковая окраска, используемая в производстве, не только придает изделиям привлекательный внешний вид,
								но и увеличивает их устойчивость к коррозии и механическим повреждениям. Это делает радиаторы более
								долговечными и уменьшает потребность в их регулярном обслуживании. Уход за такими радиаторами не
								составляет труда — они легко очищаются от пыли и грязи, что способствует поддержанию оптимальной гигиены
								в помещении.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Кроме того, стальные трубчатые радиаторы отличаются премиальным внешним видом. Они идеально вписываются
								в дизайнерские интерьеры, будь то классические или современные стили, благодаря своему универсальному
								дизайну. Это делает их подходящими для использования в самых различных архитектурных и дизайнерских
								решениях.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Как приобрести радиатор Arbonia по индивидуальному заказу?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								В наличии поддерживаются наиболее популярные модели радиаторов Arbonia. Однако, если вам нужен
								радиатор с нестандартными параметрами, вы можете оформить индивидуальный заказ. Сроки поставки
								радиатора зависят от загруженности производства и могут составлять от 2 до 4 месяцев. Пожалуйста,
								уточняйте реальные сроки у менеджера при оформлении заказа.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Заказать можно любой радиатор из полного каталога производителя. На выбор доступны не только любые
								размеры, но также цвета и варианты подключения. Это дает возможность подобрать радиатор, который
								идеально подойдет для вашего интерьера и обеспечит оптимальное отопление помещения.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Важно учитывать, что радиаторы изготавливаются и поставляются в России по вашему индивидуальному
								заказу. Поэтому их нельзя будет вернуть или обменять. Мы настоятельно рекомендуем согласовать
								технические параметры радиаторов с вашим прорабом перед оформлением заказа.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Что такое объем радиатора в литрах?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								«Емкость для воды» показывает объем теплоносителя, который требуется радиатору для нормального
								функционирования в системе отопления. Этот параметр также называют «объем воды в секции» — что дает
								лучшее представление о его значении. Хотя емкость не считается ключевым фактором при выборе радиатора,
								более важными характеристиками являются его физические размеры, рабочее давление и тепловая мощность.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Иногда можно столкнуться с двумя радиаторами с почти одинаковыми параметрами, но разной емкостью для
								воды. В таких случаях предпочтительнее выбрать радиатор с меньшим объемом воды в секции. Это позволяет
								более точно управлять температурой радиатора и ускоряет его нагрев, что особенно важно зимой.
								Небольшая емкость воды оказывается полезной в домах с газовыми котлами, так как способствует экономии
								затрат на отопление.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Зачем нужна перемычка при установки трубчатых радиаторов с боковым подключением?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								В многоквартирных домах с отопительной системой часто можно увидеть перемычку (или байпас) в
								радиаторах с боковым подключением. Это устройство не всегда является обязательным, поэтому возникает
								вопрос: для чего оно нужно? Установка перемычки предусмотрена на этапе проектирования системы, чтобы
								соответствовать техническим требованиям. Перемычка обычно используется в домах с однотрубной системой
								отопления, в отличие от двухтрубных, где теплоноситель циркулирует постоянно и нет необходимости в
								байпасе.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Однотрубная система имеет свои особенности. Для равномерного распределения тепла по этажам иногда
								необходимо перекрывать поток теплой воды в отдельных квартирах. Без перемычки температура на разных
								этажах может существенно различаться: в одних квартирах будет жарко, а в других холодно. Байпас
								позволяет настраивать температуру, обходя радиатор в конкретной квартире, обеспечивая более стабильное
								отопление на всех этажах.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Кроме того, перемычка играет важную роль при аварийных ситуациях и ремонтных работах. В случае
								необходимости можно перекрыть воду в отдельной квартире или радиаторе без отключения всего дома.
								Байпас позволяет изолировать конкретный участок, что делает систему более удобной для обслуживания и
								ремонта, не причиняя неудобств другим жильцам.{' '}
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Когда лучше менять радиаторы отопления?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Система отопления постепенно изнашивается, что со временем снижает ее эффективность, и встает вопрос о
								замене батарей. Когда же лучше всего проводить эти работы – летом или зимой? Хотя замена радиаторов в
								летний период часто считается более удобной, следует учитывать, что и тогда потребуется сливать воду
								из всей системы, что само по себе представляет непростую задачу. Важно понимать, что в летнее время
								вода остается в системе, хоть и не прогревается, поскольку оставлять трубы пустыми надолго
								нежелательно — это ускоряет их коррозию.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px'>
								Тем не менее, замена радиаторов летом обычно проще, так как в этот период дом не останется без
								отопления, и согласовать проведение работ с управляющей компанией легче. Единственный недостаток
								летней замены — невозможность сразу проверить работу новых радиаторов, поскольку подача воды
								возобновляется лишь с началом отопительного сезона.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Зимняя замена радиаторов, напротив, проводится в исключительных случаях, обычно в аварийных ситуациях,
								когда устранение проблемы не терпит отлагательств.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Зачем нужен кран Маевского на радиаторе?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Кран Маевского — это устройство, предназначенное для выпуска воздушных масс из батарей водяного
								отопления. Он помогает удалить воздух, который попадает в систему во время подпитки теплоносителем.
								Вода в системе отопления может содержать растворенные газы, которые при больших объемах начинают
								скапливаться и образовывать воздушные пробки. Эти пробки мешают нормальной циркуляции теплоносителя,
								из-за чего помещение прогревается медленнее и менее равномерно.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Для выпуска воздуха через кран Маевского требуется специальная отвертка или ключ. Присутствие крана
								особенно важно после длительного простоя системы или при добавлении нового теплоносителя, когда
								скопившиеся газы необходимо вывести наружу. Воздух также может образовываться при взаимодействии воды
								с металлическими элементами, что иногда приводит к выделению водорода.
							</Typography>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Кран Маевского установлен с учетом безопасности: его можно открыть только с помощью специальных
								инструментов, что предотвращает случайный доступ и защищает от нежелательного слива воды, что могло бы
								привести к подтоплению квартиры или соседей.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

				<Box sx={{ marginTop: '10px' }}>

					<Accordion >
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							<Typography sx={{ ...styles.standardText }}>
								Почему трубчатые радиаторы считаются наиболее гигиеничными?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ ...styles.standardText }} marginY='20px' >
								Трубчатые радиаторы считаются наиболее гигиеничными из-за их открытой и гладкой конструкции, которая
								упрощает процесс очистки. В отличие от секционных радиаторов, они не имеют труднодоступных мест, где
								могла бы скапливаться пыль и грязь. Это позволяет легко поддерживать их в чистоте даже в условиях
								строгих требований к гигиене, таких как больницы, детские сады и учебные заведения. Простота очистки
								делает трубчатые радиаторы предпочтительными для помещений, где важно минимизировать накопление пыли и
								загрязнений, поддерживая здоровую и чистую среду.
							</Typography>
						</AccordionDetails>
					</Accordion>

				</Box>

			</Box>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}
	}
}
