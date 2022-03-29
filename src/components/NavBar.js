import React, {useState} from 'react'
import styled from "styled-components";
import {motion} from "framer-motion";

const NavBar = () => {

  const [click, setClick] = useState(false);

  return (
   <NavContainer click={click} initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 2, delay: 2 }}>
     <MenuItems
       drag="y"
       dragConstraints={{ top: 0, bottom: 0 }}
       dragElastic={0.05}
       dragSnapOrigin
     >
       <MenuBtn onClick={ () => setClick(!click)}>Menu</MenuBtn>
       <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>Accueil</MenuItem>
       <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>A propos</MenuItem>
       <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>Acheter</MenuItem>
       <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>Nouveautés</MenuItem>
     </MenuItems>
   </NavContainer>
  )
}

export default NavBar

const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${props => props.click ? "0" : `-${props.theme.navHeight}`};
  width: 100vw;
  z-index: 6;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 0.3s ease;
`

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${props => props.theme.navHeight};
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  list-style: none;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 100%;
  padding: 0 10rem;
`

const MenuBtn = styled.li`
  background-color: ${props => props.theme.primary};
  list-style: none;
  color: ${props => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: ${props => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  
  cursor: pointer;
`

const MenuItem = styled(motion.li)`
  test-transform: uppercase;
  color: ${props => props.theme.text};

`
