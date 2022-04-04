import React from 'react'
import styled from "styled-components";

import {motion} from "framer-motion";
import {useLocomotiveScroll} from "react-locomotive-scroll";

import Logo from '../assets/svgs/star_white_48dp.svg'

const Footer = () => {

  const { scroll } = useLocomotiveScroll()

  const handleScroll = id => {
    let element = document.querySelector(id)

    scroll.scrollTo(element, {  offset: -100, duration: 2000, easing: [0.25, 0.0, 0.35, 1.0] })
  }

  return (
   <FooterWrapper>

     <LogoContainer>
       <img data-scroll data-scroll-speed="2" src={Logo} alt="Astronaut Studio" />
       <h3 data-scroll data-scroll-speed="-1">Astronaut</h3>
     </LogoContainer>

     <FooterComponent
      initial={{ y: '-400px' }}
      whileInView={{ y: 0 }}
      viewport={{ once:false }}
      transition={{ duration: 1.5}}
     >
       <ul>
         <li onClick={ () => handleScroll('#home')}>Accueil</li>
         <li onClick={ () => handleScroll('.about')}>A propos</li>
         <li onClick={ () => handleScroll('#shop')}>Shop</li>
         <li onClick={ () => handleScroll('#new-arrival')}>Nouvelle Collection</li>
         <li><a href="https://google.com/" target="_blank" rel="noreferrer">Lookbook</a></li>
         <li><a href="https://google.com/" target="_blank" rel="noreferrer">Commentaires</a></li>
       </ul>

       <Bottom>
         <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
           &copy; {new Date().getFullYear()}. Tous droits réservés
         </span>
       </Bottom>

     </FooterComponent>

   </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.white};
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 10vw;
    height: auto;
  }
  
  h3 {
    font-size: ${props => props.theme.fontxl};
    font-family: 'Kaushan Script';
  }
`

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 2rem 2rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
  }
  
  li {
    padding: 2rem;
    font-size: ${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${props => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
