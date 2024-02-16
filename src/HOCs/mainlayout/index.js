import React from 'react'
import { Wrapper } from './styles'
import Navbar from '../../components/Navbar';

export default function Layout (WrappedComponent){
      return (
          <Wrapper>
            <Navbar/>
            <WrappedComponent />
          </Wrapper>
      );
  };
  
