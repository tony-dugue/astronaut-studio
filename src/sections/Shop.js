import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {motion} from "framer-motion";

import img1 from '../assets/images/shop/1.jpg'
import img2 from '../assets/images/shop/2.jpg'
import img3 from '../assets/images/shop/3.jpg'
import img4 from '../assets/images/shop/4.jpg'
import img5 from '../assets/images/shop/5.jpg'
import img6 from '../assets/images/shop/6.jpg'
import img7 from '../assets/images/shop/7.jpg'
import img8 from '../assets/images/shop/8.jpg'
import img9 from '../assets/images/shop/9.jpg'
import img10 from '../assets/images/shop/10.jpg'
import img11 from '../assets/images/shop/11.jpg'
import img12 from '../assets/images/shop/12.jpg'

const Product = ({ img, title = '' }) => {
  return (
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title}/>
      <h1>{title}</h1>
    </Item>
  )
}

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
          //markers: true
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
          //markers: true
        },
        x: -pinWrapWidth,
        ease: 'none,'
      })
      ScrollTrigger.refresh();
    }, 1000)

    return () => {
      // Let's clear instances
      tl.kill();
      ScrollTrigger.kill();
    }
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
       <Product img={img1} title="En stock" />
       <Product img={img2} title="Automne 2022" />
       <Product img={img3} title="En stock" />
       <Product img={img4} title="En stock" />
       <Product img={img5} title="En stock" />
       <Product img={img6} title="Eté 2022" />
       <Product img={img7} title="Automne 2022" />
       <Product img={img8} title="Automne 2022" />
       <Product img={img9} title="3 tailles disponibles" />
       <Product img={img10} title="En stock" />
       <Product img={img11} title="En stock" />
       <Product img={img12} title="Edition spéciale" />
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
  color: ${props => props.theme.text};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.grey};

  position: absolute;
  top: 0;
  left: 5%;
  z-index: 11;
`

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.primary};
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

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`
