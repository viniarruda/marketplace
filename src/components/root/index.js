import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from '../private-route'
import Container from '../../components/common/container'
import Home from '../../views/home'

const Root = ({store}) => {
  baseStyles();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Container>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>)
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root