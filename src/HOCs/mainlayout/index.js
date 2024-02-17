import React, { useState } from 'react'
import { Wrapper,MenuBurger } from './styles'
import Navbar from '../../components/Navbar';
import useBreakpoint from '../../utilities/mediaQuery';
import { breakingPoints } from "../../global/theme";
import MainSidebar from '../../components/mainsidebar';

export default function Layout (WrappedComponent){
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const [sideOpen,setsideOpen]=useState(false)
  const handleSidebar =()=>{
    setsideOpen(!sideOpen)
  }

      return (
          <Wrapper>
          {isSmallScreen ? <MainSidebar handleSidebar={handleSidebar} sideOpen={sideOpen} /> : <Navbar />}
          {isSmallScreen&&<MenuBurger onClick={handleSidebar}/>}

          
            <WrappedComponent />
          </Wrapper>
      );
  };
  
