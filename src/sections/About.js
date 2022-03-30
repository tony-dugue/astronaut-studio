import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/images/about/1.jpg'
import img2 from '../assets/images/about/2.jpg'
import img3 from '../assets/images/about/3.jpg'

const About = () => {
  return (
    <AboutWrapper id="fixed-target">

      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">A Propos</Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Astronaut Studio est un studio créatif basé à Paris.
        Animés par une équipe d'artistes, nous créons des oeuvres futuristes sur le thème de l'espace.
        <br /><br />
        Nous nous efforçons de bâtir sur notre vision. En tant que studio créatif, nous faisons notre maximum pour créer des expériences incroyables accessible à tous.
        Travaillant avec plus de 50 artistes du monde entier, notre équipe de créateurs donne vie aux projets les plus futuristes.
        Tout ce que nous pouvons rêver, nous pouvons le créer.
        <br /><br />
        Si le style et les envies de notre marque ont suffisamment éveillé votre curiosité, embarquez avec nous à bord de notre navette spatiale
        pour découvrir plus précisément nos créations.
      </Left>

      <Right>
        <img src={img1} alt="A propos" />
        <img src={img2} className="small-img-1" alt="A propos" data-scroll data-scroll-speed="5" />
        <img src={img3} className="small-img-2" alt="A propos" data-scroll data-scroll-speed="-2" />
      </Right>

    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  position: relative;
  width: 80vw;
  min-height: 100vh;
  
  display: flex;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontBig};
  color: ${props => props.theme.primary};
  font-family: "Kaushan Script";
  font-weight: 300;
  
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`

const Left = styled.div`
  width: 50%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 24%;
`

const Right = styled.div`
  width: 50%;
  position: relative;
  
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 87%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 70%;
    bottom: 30%;
  }
`
