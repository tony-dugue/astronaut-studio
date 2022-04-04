import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from '../assets/images/new-arrivals/1.jpg'
import img2 from '../assets/images/new-arrivals/2.jpg'
import img3 from '../assets/images/new-arrivals/3.jpg'
import img4 from '../assets/images/new-arrivals/4.jpg'

const Product = ({ img, title = '' }) => {
  return (
    <Item >
      <img src={img} alt={title}/>
      <h2>{title}</h2>
    </Item>
  )
}

const NewArrival = () => {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {

    let element = ref.current;  // on cible le NewArrivalWrapper
    let scrollingElement = scrollingRef.current; // on cible la colonne du milieu

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          //markers: true
        },
        // on doit augmenter la hauteur de défilement de cette section comme pour la largeur de l'élément scrollé
        ease: 'none,'
      })

      // vertical scrolling
      tl.fromTo(scrollingElement,
        { y: '0' },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App', // locomotive element
            scrub: true,
            //markers: true
          }
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
   <NewArrivalWrapper ref={ref} id="new-arrival">
     <Overlay />

     <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Nouveautés</Title>

     <Container ref={scrollingRef}>
       <Product img={img1} title="Siège suspendu" />
       <Product img={img2} title="Casque" />
       <Product img={img3} title="Tenue complète" />
       <Product img={img4} title="Combinaison" />
     </Container>

     <Text data-scroll data-scroll-speed="-3">
       Découvrez la nouvelle collection qui sera disponible à l'été 2022.
       <br /><br />
       Cette collection est un excellent moyen d'adopter un nouveau look original et très futuriste.
       <br /><br />
       La première ligne de vêtements que vous verrez sur cette collection est destinée aux femmes.
       La collection comprend également trois nouveaux styles pour hommes ainsi que de nombreux accessoires.
       <br /><br />
       N'hésitez plus et adoptez le style Astronaut dès maintenant !
     </Text>

   </NewArrivalWrapper>
  )
}

export default NewArrival

const NewArrivalWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
  //background-color: ${props => props.theme.primary};
`

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  //background-color: ${props => props.theme.grey};
  box-shadow: 0 0 0 4vw ${props => props.theme.white};
  border: 3px solid ${props => props.theme.grey};
  z-index: 11;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.text};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.grey};

  position: absolute;
  top: 2rem;
  left: 0;
  z-index: 11;
`

const Text = styled.div`
  width: 20%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
`

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`
