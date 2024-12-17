import Box from "@mui/material/Box";
import Script from "next/script";


const WidgetRequest = () => {

    return (
        <>
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
        </>
    );
}

export default WidgetRequest;