import {useEffect, useRef, useState} from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {dark} from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import {AnimatePresence} from "framer-motion";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

import Loader from "./components/Loader";
import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";

function App() {

  const containerRef = useRef(null)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }, [])

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark} ref={containerRef}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              smartphone: { smooth: true},  // enable smooth scrolling on mobile
              tablet: { smooth: true},  // enable smooth scrolling on tablet
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

          <AnimatePresence>
            { loaded ? null : <Loader />}
          </AnimatePresence>

          <ScrollTriggerProxy />

          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>

      </ThemeProvider>
    </>
  );
}

export default App;


