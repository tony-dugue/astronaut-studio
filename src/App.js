import {useRef} from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {dark} from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import {AnimatePresence} from "framer-motion";

import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

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

        <ScrollTriggerProxy />

        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
          </main>
        </AnimatePresence>
        </LocomotiveScrollProvider>

      </ThemeProvider>
    </>
  );
}

export default App;


