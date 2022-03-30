import React from 'react'
import styled from "styled-components";

const Shop = () => {
  return (
   <ShopWrapper>
     <Title data-scroll data-scroll-speed="-1">Nouveautés</Title>
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

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`
