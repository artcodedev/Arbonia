import type { NextPage } from "next";
import Link from "next/link";
import { Box, Typography, Grid, Divider } from "@mui/material";

import PageHeader from "../Components/pageHeader/pageHeader";
import PageTitle from "../Components/pageTitle/pageTitle";
import Hero from "../Components/hero/hero";

// import trackEvent from "../utils/trackEvent";

import * as styles from "../styles/styles";
import global from "../variables/global";
import Script from "next/script";

type PageAboutProps = {};

const PageAbout: NextPage<PageAboutProps> = () => {
  return (
    <Box>


      <PageTitle
        header={"Специализированный магазин Arbonia в России"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "О магазине", link: "/about" },
        ]}
      />

      <PageHeader title={"О магазине радиаторов Arbonia"} />

      <Hero imgPath={"/images/sliders/slide.jpeg"} header={"О магазине"} />

      <Box sx={{ ...global.pagePadding }} marginTop="20px"
      >
        <Box>
          <Grid container spacing={2} >
            <Grid item xs={12} md={7} lg={6}>
              <Typography sx={{ ...styles.standardText }} component={"span"} >
                Наша компания специализируется на отопительном оборудовании
                премиум-класса: стальные трубчатые радиаторы, внутрипольные
                конвекторы, дизайн-радиаторы и чугунные ретро-радиаторы. Мы
                работаем с большим количеством европейских заводов. В данном
                магазине представлена продукции группы компаний Arbonia Group,
                хорошо известной на российском рынке следующими товарами:
                <ul>
                  <li>Стальные трубчатые радиаторы Arbonia</li>
                  <li>Полотенцесушители и дизайн-радиаторы</li>
                  <li>Внутрипольные и напольные конвекторы</li>
                </ul>
                Мы имеем богатый опыт работы с радиаторами Arbonia (с 2009 года)
                и можем предоставить вам грамотную консультацию в подборе
                наиболее подходящих для вас радиаторов, а также комплектующих к
                ним. Каждому нашему клиенту мы гарантируем индивидуальный
                подход, учитывающий именно его пожелания, а также технические
                особенности системы отопления в его доме или квартире.
              </Typography>
              <Typography sx={{ ...styles.standardText, marginTop: "20px" }}>
                Доставку осуществляем по Москве и Санкт-Петербургу. В другие
                города доставка осуществляется через транспортные компании
                (Деловые Линии, Возовоз, Байкал-Сервис и др).
              </Typography>
            </Grid>

            <Grid item xs={12} md={1} lg={1} >
              <Divider orientation="vertical" />
            </Grid>


            <Grid item xs={12} md={4} lg={3} >
              <Box>
                <Typography sx={{ ...styles.standardTextBold }}>
                  Контактная информация
                </Typography>
              </Box>
              <Box marginTop="20px">

                <Typography sx={{ ...styles.smallTextBold }} display="inline" >
                  тел.:&nbsp;
                </Typography>

                <Link href={`tel:${global.phone495}`}>
                  <a style={{ textDecoration: "none" }} >

                    <Typography sx={{ ...styles.standardTextLink }} display="inline" >
                      {global.phone495String}
                    </Typography>
                  </a>
                </Link>
                <br />
                <Typography sx={{ ...styles.smallTextBold, color: "#ffffff" }} display="inline">
                  тел.:&nbsp;
                </Typography>

                <Link href={`tel:${global.phone812}`}>
                  <Typography sx={{ ...styles.standardTextLink }} display="inline">
                    {global.phone812String}
                  </Typography>
                </Link>

              </Box>
              <Box>

                <Typography sx={{ ...styles.smallTextBold }} display="inline" >
                  email:&nbsp;
                </Typography>

                <Link href={`mailto:${global.email}`}>
                  <Typography sx={{ ...styles.standardTextLink }} display="inline"
                  >
                    {global.email}
                  </Typography>

                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{ ...styles.smallTextBold }}
                  display="inline"
                >
                  whatsapp:&nbsp;
                </Typography>
                <Link href={`https://wa.me/${global.whatsApp}`}>

                  <Typography sx={{ ...styles.standardTextLink }} display="inline" >
                    {global.whatsAppString}
                  </Typography>
                </Link>

              </Box>

              <Box>

                <Typography sx={{ ...styles.smallTextBold }} display="inline" >
                  telegram:&nbsp;
                </Typography>

                <Link href={`https://t.me/Arboniashopbot`}>
                  <Typography sx={{ ...styles.standardTextLink }} display="inline" >
                    @Arboniashopbot
                  </Typography>
                </Link>

              </Box>

            </Grid>
          </Grid>
        </Box>


        <Box marginY="30px">
          <Divider />
        </Box>

        <Box>
          <iframe style={{ width: '100%', border: 'none', height: '500px' }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104971.25940655338!2d12.908647305941244!3d49.74513818698379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a9a93dc7d9863%3A0x7e4711aedffa7546!2zU3TFmcOtYnJvLCAzNDkgMDEgU3TFmcOtYnJvLCBDemVjaGlh!5e0!3m2!1sen!2srs!4v1713897412851!5m2!1sen!2srs'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>

        <Box>
          <Script
            id={"ucalc"}
            dangerouslySetInnerHTML={{
              __html: `
                    var widgetOptions403860 = { bg_color: "transparent" }; 
                    (function () { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=403860&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
                    `,
            }}
          />

          <Box marginTop="50px">
            <div className="uCalc_403860"></div>
          </Box>
        </Box>



        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h5" component="h2" >
            Юридическая информация
          </Typography>
          <Box marginTop="20px">
            <Typography sx={{ ...styles.standardText }}>
              <span>
                <strong>ООО &#34;ХОУМ КОМФОРТ&#34;</strong>
              </span>
              <br />
              www.homekomfort.ru
              <br />
              Центральный офис: 192019, РОССИЯ, Г. САНКТ-ПЕТЕРБУРГ, ОБУХОВСКОЙ
              ОБОРОНЫ ПР-КТ, Д. 7, ЛИТЕРА С, ОФИС 6
              <br />
              ОГРН: 1237800065865
              <br />
              &zwj;ИНН/КПП 7811788339 / 781101001
              <br />
              Р/с 40702810520000015671
              <br />
              в ООО &#34;Банк Точка&#34;
              <br />
              БИК 044525104
              <br />
              Корр/сч: 30101810745374525104
              <br />
              <br />
              <br />
              Мы работаем как с физическими, так и с юридическими лицами.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageAbout;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
