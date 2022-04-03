import React from 'react'
import styled from "styled-components";

import Logo from '../assets/svgs/star_white_48dp.svg'

const Footer = () => {
  return (
   <FooterWrapper>
     <LogoContainer>
       <img src={Logo} alt="Astronaut Studio" />
       <h3>Astronaut</h3>
     </LogoContainer>
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
