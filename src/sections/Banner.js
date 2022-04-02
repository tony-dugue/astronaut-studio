import React from 'react'
import styled from "styled-components";

const Banner = () => {
  return (
   <BannerWrapper>
     <Container>
       <BannerComponent><span>N’aie pas peur de l’espace qui</span></BannerComponent>
       <BannerComponent><span>distance tes rêves de la réalité.</span></BannerComponent>
       <BannerComponent><span>Si tu peux en rêver, tu peux le réaliser</span></BannerComponent>
     </Container>
   </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;
`

const Container = styled.div`
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BannerComponent = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  font-family: "Kaushan Script";
  color: ${props => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  
  span {
    display: block;
    background-color: ${props => props.theme.primary};
    padding: 1rem 2rem;
  }
`
