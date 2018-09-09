import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login, logout } from '../../../store/actions/authAction';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import Navbar from './navbar';
import LoggedMenu from './loggedMenu';
import UnloggedMenu from './unloggedMenu';
import colors from '../mixins/colors';


const NavAppBar = styled(AppBar)`
  background-color: ${colors.primary};
  color: ${colors.tertiary};
`;

const NavTitle = styled(Typography)`
  flex-grow: 1;
`;


class Header extends Component {

  render() {
    const { auth, login, logout } = this.props

    return (
      <Navbar>
        <NavAppBar position='static'>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <NavTitle variant="title" color="inherit">
              Title
            </NavTitle>
            {
              auth.logged ?
                <LoggedMenu logout={logout} /> : <UnloggedMenu login={login} />
            }
          </Toolbar>
        </NavAppBar>
      </Navbar>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login())
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)