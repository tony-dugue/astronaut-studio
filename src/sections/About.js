import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutWrapper>
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        A Propos
      </Title>
    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  position: relative;
  width: 80vw;
  min-height: 100vh;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`

