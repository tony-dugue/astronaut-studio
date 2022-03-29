import React from 'react'
import styled from "styled-components";
import {motion} from "framer-motion";

import MainVideo from '../assets/videos/video3.mp4'

const containerVariants = {
  hidden : { opacity: 0 },
  show : { opacity: 1, transition : { delayChildren: 2, staggerChildren: 0.3 } }
}

const letterVariants = {
  hidden : { opacity: 0 },
  show : { opacity: 1 }
}

const CoverVideo = () => {
  return (
   <VideoContainer>
     <DarkOverlay />
     <Title variants={containerVariants} initial="hidden" animate="show">
       <div>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.15" data-scroll-speed="4">A</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">s</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">t</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">r</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">o</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">n</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">a</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">u</motion.h1>
         <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">t</motion.h1>
       </div>
       <motion.h2 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">Studio</motion.h2>
     </Title>
     <video src={MainVideo} type="video/mp4" autoPlay muted loop />
   </VideoContainer>
  )
}

export default CoverVideo

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.text};
  
  div {
    display: flex;
    flex-direction: row;
  }
  
  h1 {
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
  }

  h2 {
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontxxl};
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    margin-top:-50px;
  }
`

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  
  background-color: ${props => props.theme.bodyRgba};
`
