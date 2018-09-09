import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from '../private-route/index'
import Content from '../../components/common/content'
import Home from '../../views/home/index'
import Header from '../../components/common/header/header'

const Root = ({store}) => {
  baseStyles();
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header/>
          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </Content>
        </Fragment>
      </Router>
    </Provider>)
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root