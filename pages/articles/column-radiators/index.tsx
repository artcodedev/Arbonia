import React from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import PageTitle from "../../../components/pageTitle/pageTitle";
import PageHeader from "../../../components/pageHeader/pageHeader";
import Hero from "../../../components/hero/hero";

import * as styles from "../../../styles/styles";
import global from "../../../variables/global";

type ArticlePageProps = {};

const ArticlePage: NextPage<ArticlePageProps> = () => {
  return (
    <Box>
      <PageHeader
        title={
          "Стальные трубчатые радиаторы. Что это? Плюсы и минусы."
        }
        description={
          "Что такое стальные трубчатые радиаторы. Почему они набирают все большую популярность в России. Особенности производства. Технические характеристики. Плюсы и минусы."
        }
      />
      <PageTitle
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Полезная информация", link: "/articles" },
          {
            title: "Стальные трубчатые радиаторы",
            link: "/articles/column-radiators",
          },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide-5.jpeg"}
        header={"Стальные трубчатые радиаторы"}
      />
      <Box sx={{ ...global.pagePadding, maxWidth: "900px", margin: "auto" }}>
        <Typography sx={{ ...styles.standardText }} marginY="20px">

          <p>
            Трубчатые радиаторы являются одним из самых востребованных видов отопительного оборудования в России, сочетая в себе практичность, долговечность и высокую теплоотдачу. Эти устройства представляют собой эстетичные конструкции из металлических труб, соединённых коллекторами сверху и снизу, что обеспечивает эффективное движение теплоносителя и равномерный нагрев помещений. Современные технологии лазерной сварки, используемые при производстве, гарантируют высокую надёжность и стабильность этих радиаторов.
          </p><p>
            Производители предлагают трубчатые радиаторы из различных металлов, включая сталь и медь, с каждым из которых связаны определённые эксплуатационные качества и ценовые категории. Стальные модели особенно популярны благодаря их способности выдерживать высокое давление и лёгкости в уходе. Они могут быть окрашены для обновления внешнего вида, что делает их привлекательным выбором для любого интерьера.
          </p><p>
            <Link href="/">
              <a style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ ...styles.standardTextRedLink }}
                  component="span"
                >
                  Трубчатые радиаторы
                </Typography>
              </a>
            </Link>{" "}представляют современную альтернативу традиционным чугунным батареям и отличаются не только привлекательным дизайном, но и универсальностью установки, что позволяет интегрировать их в любое пространство. Модели варьируются от вертикальных до горизонтальных, отличаясь по числу трубок и секций, что делает их подходящими для различных жилищных условий. Благодаря автоматизированному производству, качество радиаторов остаётся на высшем уровне, минимизируя вероятность производственных ошибок и увеличивая общую надёжность изделий.
          </p>

        </Typography>
        <Box textAlign={"center"}>
          <img
            src="/images/models/3030-1.jpeg"
            alt="Трубчатый радиатор небольшой высоты с нижним подключением"
            width={600}
            height={600}
          />
        </Box>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Преимущества трубчатых радиаторов
        </Typography>

        <Typography sx={{ ...styles.standardText }} marginY="20px">
          <p>
            Трубчатые радиаторы зарекомендовали себя как надёжное и функциональное решение для систем отопления в различных типах зданий. Они обладают рядом существенных преимуществ, делающих их предпочтительным выбором для многих потребителей.
            <ul><li>
              <Box sx={{ ...styles.standardText }}>
                Прежде всего, трубчатые радиаторы отличаются простотой и надёжностью конструкции. Они изготавливаются из качественной стали толщиной до 2 мм, что обеспечивает высокую прочность и долговечность. Эти радиаторы способны выдерживать давление теплоносителя до 22 атмосфер, что делает их идеальным выбором для высотных зданий.
              </Box></li>
              <li>
                <Box sx={{ ...styles.standardText }}>
                  Второе значимое преимущество — это высокий уровень тепловой отдачи. Благодаря эффективному распределению тепла, трубчатые радиаторы способны быстро и равномерно обогревать большие помещения. Это достигается за счёт минимального коэффициента конвекционного нагрева, что позволяет теплу распространяться по комнате без "горячих точек".
                </Box></li>
              <li>
                <Box sx={{ ...styles.standardText }}>
                  Ещё одним важным аспектом является коррозийная стойкость. Внутреннее полимерное покрытие радиаторов эффективно противостоит коррозии, что критически важно в условиях использования агрессивных теплоносителей в многоквартирных домах.
                </Box></li>
              <li>
                <Box sx={{ ...styles.standardText }}>
                  Трубчатые радиаторы также отличаются лёгкостью установки, не требуя специальных навыков или инструментов. Их эргономичная и безопасная конструкция без острых углов делает эти приборы идеальными для использования даже в детских комнатах.
                </Box></li>
              <li>
                <Box sx={{ ...styles.standardText }}>
                  Разнообразие моделей позволяет вписать радиаторы в любой интерьер. От классических до современных дизайнерских решений, от минимализма до лофта — трубчатые радиаторы могут стать ярким акцентом или деликатным дополнением к общему стилю помещения.
                </Box></li>

            </ul>

            Благодаря возможности выбора различных форм, размеров и цветов, а также благодаря простоте ухода и универсальности подключения, трубчатые радиаторы заслужили признание на рынке отопительных систем.Они не только эффективно обогревают пространство, но и способствуют созданию здорового микроклимата в помещении, предотвращая накопление пыли и аллергенов.
          </p>
        </Typography >

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Недостатки трубчатых радиаторов
        </Typography>

        <Typography sx={{ ...styles.standardText }} marginY="20px">
          <p>
            Возможные недостатки трубчатых радиаторов часто обсуждаются среди потребителей и экспертов, однако многие из них связаны с конкретными моделями или условиями эксплуатации. Один из часто упоминаемых минусов — это относительно низкая теплоотдача у недорогих моделей с ограниченным количеством трубок в секции. Это может снижать общую эффективность системы отопления, особенно в просторных помещениях.
          </p><p>
            Однако, главным и наиболее значимым недостатком трубчатых радиаторов является их стоимость. Они обычно стоят значительно дороже, чем традиционные чугунные или современные биметаллические радиаторы. Высокая цена обусловлена не только использованием высококачественных материалов, но и сложностью производственных процессов. Тем не менее, многие потребители считают, что инвестиции оправданы благодаря превосходной надежности, изысканному внешнему виду и долгому сроку службы этих приборов.
          </p>
          <p>
            Трубчатые радиаторы особенно подходят для интерьеров, где каждый элемент декора подбирается с особым вниманием. В таких случаях экономия на отопительных приборах может негативно сказаться на общем впечатлении от ремонта. Кроме того, высокая стойкость к авариям и протечкам делает трубчатые радиаторы предпочтительным выбором в дорогостоящих отделках, где любые повреждения могут привести к значительным финансовым потерям.
          </p>
        </Typography>
        <Box textAlign={"center"}>
          <img
            src="/images/models/5-columns.jpeg"
            alt="5-трубчатый радиатор"
            width={600}
            height={600}
          />
        </Box>
      </Box >
    </Box >
  );
};

export default ArticlePage;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}