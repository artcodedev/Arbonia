

// import { useState } from "react";
import Link from "next/link";
// import Script from "next/script";

import { Box, Typography, Grid } from "@mui/material";

// import PageHeader from "../Components/pageHeader/pageHeader";
// import PageTitle from "../Components/pageTitle/pageTitle";

// import trackEvent from "../utils/trackEvent";

// import type { NextPage } from "next";

import * as styles from "../../styles/styles";
import global from "../../variables/global";

const PanelContacts = (): JSX.Element => {


    return (
        <>
            <Box marginY="20px" padding="10px" sx={{ backgroundColor: "#333333", borderRadius: "10px" }} >
                <Grid container spacing={2} alignItems={"center"} >

                    <Grid item xs={12} sm={4} textAlign="center" >
                        <Typography sx={{ ...styles.smallText, color: "#e6e6e6" }} display="inline" >
                            тел.:&ensp;
                        </Typography>

                        <Link href={`tel:${global.phone495}`}>

                            <Typography sx={{ ...styles.standardTextLink, color: "white" }} display="inline" >
                                {global.phone495String}
                            </Typography>

                        </Link>

                        <Typography sx={{ ...styles.standardText, color: "white" }} display="inline" >
                            <br />
                            <Typography sx={{ ...styles.smallText, color: "#333333" }} display="inline" component="span" >
                                тел.:&ensp;
                            </Typography>
                        </Typography>
                        <Link href={`tel:${global.phone812}`}>
                            <Typography sx={{ ...styles.standardTextLink, color: "white" }} display="inline">
                                {global.phone812String}
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={4} textAlign="center" >
                        <Typography sx={{ ...styles.smallText, color: "#e6e6e6" }} display="inline" >
                            email:&ensp;
                        </Typography>
                        <Link href={`mailto:${global.email}`}>
                            <Typography sx={{ ...styles.standardTextLink, color: "white" }} display="inline" >
                                {global.email}
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={4} textAlign="center" >
                        <Typography sx={{ ...styles.smallText, color: "#e6e6e6" }} display="inline" >
                            whatsapp:&ensp;
                        </Typography>
                        <Link href={`https://wa.me/${global.whatsApp}`}>
                            <Typography sx={{ ...styles.standardTextLink, color: "white" }} display="inline" >
                                {global.whatsAppString}
                            </Typography>
                        </Link>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default PanelContacts;