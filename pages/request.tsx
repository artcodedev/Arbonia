import { useState } from "react"
import Link from "next/link"
import Script from "next/script"

import { Box, Typography, Grid } from "@mui/material"

import PageHeader from "../Components/pageHeader/pageHeader"
import PageTitle from "../Components/pageTitle/pageTitle"

// import trackEvent from "../utils/trackEvent"

import PanelContacts from "../Components/panelContacts/PanelContacts"
import WidgetRequest from "../Components/Widget/WidgetRequest"

import type { NextPage } from "next"

import * as styles from "../styles/styles"
import global from "../variables/global"

type PageRequestProps = {}

const PageRequest: NextPage<PageRequestProps> = () => {
  const [show, setShow] = useState<boolean>(false)
  const toggleShow = () => setShow(!show)

  return (
    <Box>
      {/* <Script
        id={"ucalc"}
        // strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    var widgetOptions403860 = { bg_color: "transparent" }; 
                    (function () { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=403860&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
                    `,
        }}
      /> */}
      <PageTitle
        header={"Специализированный магазин Arbonia в России"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Запрос на подбор радиаторов", link: "/request" },
        ]}
      />
      <Box sx={{ ...global.pagePadding }}>
        <PageHeader title={"Запрос на подбор радиаторов Arbonia"} />
        <Box marginY={"30px"}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign="center"
            sx={{ textTransform: "uppercase" }}
          >
            Запрос на подбор радиаторов
          </Typography>
        </Box>
        <Typography
          sx={{ ...styles.standardText }}
          textAlign="center"
        >
          Если вам требуется консультация, расчет или подбор радиаторов по
          проекту,то свяжитесь с нами любым удобным вам способом.
        </Typography>

        <PanelContacts />


        <Typography
          sx={{ ...styles.standardText }}
          textAlign="center"
        >
          Также вы можете заполнить форму, представленную ниже.
        </Typography>
        <Box marginTop="20px">
          <a onClick={() => toggleShow()}>
            <Typography
              sx={styles.smallTextGreenUnderline}
              textAlign="center"
            >
              <span style={{ textDecorationStyle: "dotted" }}>
                Какая информация нам нужна
              </span>
            </Typography>
          </a>
        </Box>

        {show && (
          <Box
            padding="20px"
            sx={{ backgroundColor: "#e6e6e6", borderRadius: "10px" }}
          >
            <Typography
              sx={{ ...styles.standardText }}
              component={"span"}
            >
              Информация, которая нужна для правильного побора радиаторов: (если
              каких-то данных пока нет - то можно отправить то, что уже
              известно)
              <ul>
                <li>Размеры помещений, высота потолков</li>
                <li>
                  Желаемое место расположения радиаторов. Доступные габариты.
                  Например, если радиатор ставится под окно, то: высота
                  подоконника и длина окна
                </li>
                <li>
                  Если возможно - план квартиры / дома, что упростит общение
                </li>
                <li>
                  Тип подключения радиаторов в вашем доме: индивидуальная
                  разводка труб по полу или общий стояк отопления
                </li>
                <li>Город доставки</li>
              </ul>
              Любую иную информацию, которая вам кажется важной и которую нам
              необходимо учесть. Оставьте ваши контактные данные, чтобы мы могли
              связаться с вами и получить дополнительную информацию в случае
              необходимости.
            </Typography>
          </Box>
        )}

        <WidgetRequest />

      </Box>
    </Box>
  )
}

export default PageRequest
