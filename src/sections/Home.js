import React from 'react'
import styled from 'styled-components'
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
   <HomeWrapper>
     <CoverVideo />
     <Logo />
     <NavBar />
   </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`
