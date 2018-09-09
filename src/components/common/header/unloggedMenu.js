import React, {Fragment} from "react";
import NavLink from './nav-link';
import Button from '../button';

const UnloggedMenu = (props) => (
  <Fragment>
    <NavLink to='/cadastro'>Cadastrar</NavLink>
    {/*<NavLink to='/login'>Login</NavLink>*/}
    <Button primary default onClick={props.login}>Login</Button>
  </Fragment>
)



export default UnloggedMenu