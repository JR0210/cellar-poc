import React, { useEffect } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
// @ts-ignore
import LogoGif from "../images/cellarOne.gif";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
};

// markup
const IndexPage = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src="https://booksy.com/widget/code.js?id=75346&country=gb&lang=en";
      // document.body.appendChild(script);
      const test2 = document.querySelector('#test2')
      if (test2) test2.appendChild(script);
      return () => {
          const test2 = document.querySelector('#test2')
          if (test2) test2.removeChild(script);
      }
  }, [])
  return (
    <main>
      <Helmet>        
        <style type="text/css">
          {`
            * {
              box-sizing: border-box;
            }
            html {
              overflow-x: hidden;
              width: 100vw;
              max-width: 100vw;
            }
            main {
              margin: 0;
              font-family: Montserrat, sans-serif;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </Helmet>
      <title>Cellar Barbers</title>
      <img style={{ width: "70%" }} alt="Gatsby G Logo" src={LogoGif} />
      <div id="test2"></div>
      <div>test</div>
    </main>
  );
};

export default IndexPage;
