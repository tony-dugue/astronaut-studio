import React from 'react'
import styled from "styled-components";

const Shop = () => {
  return (
   <ShopWrapper>
     <Title data-scroll data-scroll-speed="-1">Nouvelle collection</Title>
     <Left>
       <p>La toute nouvelle collection est actuellement en cours de développement aux États-Unis.
         <br /><br />
       Nos produits sont crées avec des matières de haute qualité, du coton le plus fin aux tissus les plus écologiques.
      <br /><br />
       Nous proposons une grande gamme d'options vestimentaires différentes comme des chaussures, des vestes et des pantalons.
       Non seulement des vêtements, mais nous créons également des accessoires uniques, originaux et surtout ... futuristes !</p>
     </Left>
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

// «N’aie pas peur de l’espace qui distance tes rêves de la réalité. Si tu peux en rêver, tu peux le réaliser»
