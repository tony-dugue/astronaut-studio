import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Shop = () => {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {

    let element = ref.current;  // on cible le ShopWrapper
    let scrollingElement = horizontalRef.current; // on cible la colonne droite

    let pinWrapWidth = scrollingElement.offsetWidth; // on récupère la largeur de la colonne droite

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          markers: true
        },
        // on doit augmenter la hauteur de défilement de cette section comme pour la largeur de l'élément scrollé
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none,'
      })

      // horizontal scrolling
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          markers: true
        },
        x: -pinWrapWidth,
        ease: 'none,'
      })
      ScrollTrigger.refresh();
    }, 1000)

  }, []);

  return (
   <ShopWrapper ref={ref}>

     <Title data-scroll data-scroll-speed="-1">Nouvelle collection</Title>

     <Left>
       <p>La toute nouvelle collection est actuellement en cours de développement aux États-Unis.
         <br /><br />
       Nos produits sont crées avec des matières de haute qualité, du coton le plus fin aux tissus les plus écologiques.
      <br /><br />
       Nous proposons une grande gamme d'options vestimentaires différentes comme des chaussures, des vestes et des pantalons.
       Non seulement des vêtements, mais nous créons également des accessoires uniques, originaux et surtout ... futuristes !</p>
     </Left>

     <Right ref={horizontalRef}>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
       <h1>img</h1>
     </Right>

   </ShopWrapper>
  )
}

export default Shop

const ShopWrapper = styled.section`
  min-height: 100vh;  
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  position: relative;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.primary};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.body};

  position: absolute;
  top: 2rem;
  left: 5%;
  z-index: 11;
`

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  
  min-height: 100vh;
  z-index: 5;
  
  poisition: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  //width: 65%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  background-color: ${props => props.theme.grey};
  
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`

// «N’aie pas peur de l’espace qui distance tes rêves de la réalité. Si tu peux en rêver, tu peux le réaliser»
