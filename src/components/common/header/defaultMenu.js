import React from "react";
import styled from 'styled-components'
import NavLink from "./nav-link";
import colors from '../mixins/colors'
import breakpoints from '../mixins/breakpoints'


const Menu = styled.div`
  display: inline-flex;
  
  @media (max-width: ${breakpoints.small}) {
    display: none;
  }
  
`;

const DefaultMenu = () => (
  <Menu>
    <NavLink to='/sobre'>Sobre</NavLink>
    <NavLink to='/anuncios'>Anúncios</NavLink>
    <NavLink to='/encomendas'>Encomendas</NavLink>
    <NavLink to='/faq'>Faq</NavLink>
    <NavLink to='/contato'>Contato</NavLink>
  </Menu>
)

export default DefaultMenu;