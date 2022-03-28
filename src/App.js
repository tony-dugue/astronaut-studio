import {useRef} from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {dark} from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.min.css'

import Home from "./sections/Home";

function App() {

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark} ref={containerRef}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basically, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Home />
          </main>
        </LocomotiveScrollProvider>

      </ThemeProvider>
    </>
  );
}

export default App;


