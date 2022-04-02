import React from 'react'
import styled from "styled-components";

const Banner = () => {
  return (
   <BannerWrapper>
     <Container id="up">

       <BannerComponent>
         <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">
           N’aie pas peur de l’espace
         </span>
       </BannerComponent>

       <BannerComponent>
         <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">
           qui distance tes rêves
         </span>
       </BannerComponent>

       <BannerComponent>
         <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">
           de la réalité. Si tu peux
         </span>
       </BannerComponent>

       <BannerComponent>
         <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">
           en rêver, tu peux le réaliser
         </span>
       </BannerComponent>

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
  justify-content: space-evenly;
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
  font-size: ${props => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${props => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  
  span {
    display: block;
    background-color: ${props => props.theme.primary};
    padding: 1rem 2rem;
    margin: 0.5rem 0;
  }
`
