import React from 'react'
import styled from 'styled-components'

import Input from '@material-ui/core/Input';

import SearchIcon from '@material-ui/icons/Search';
import breakpoints from "../mixins/breakpoints";


const ContainerSearch = styled.div`
  position: relative;
  border-radius: 2px;
  background-color: #e8e8e8;
  &:hover {
    background-color: #d6d6d6;
  };
  margin-right: 5px;
  margin-left: 0;
  width: auto;
  
  @media (max-width: ${breakpoints.small}) {
    margin-left: 5px;
    width: 100%;
  }
`;

const Icon = styled.div`
  width: 35px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`;

const InputSearch = styled(Input)`
  color: inherit;
  width: 200px;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  transition: width 1.5s;
  &:focus {
    width: 300px;
  }
  
  @media (max-width: ${breakpoints.small} ) {
    width: 100%;
  }
`;

const Search = () => (
  <ContainerSearch>
    <Icon>
      <SearchIcon />
    </Icon>
    <InputSearch
      placeholder="Pesquisar…"
      disableUnderline
    />
  </ContainerSearch>
)

export default Search