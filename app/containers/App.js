import React, { Component } from 'react'
import {
  asset,
  Pano,
  Text,
  View,
} from 'react-vr'
import { connect } from 'react-redux'
import { MemoryRouter as Router, Route } from 'react-router'
import OutsideContainer from './OutsideContainer'
import InterviewContainer from './InterviewContainer'

import { routes } from '../redux/route'

const mapStateToProps = (state) => ({
  destination: state.route.destination,
})

class App extends Component {
  state = {
    destination: routes.outside
  }

  pushToDestination = (destination) => {
    let route = ''
    const {history} = this.props
    switch(destination) {
      case routes.outside:
        history.push('/')
      case routes.interview:
        history.push('/inside')
    }
  }

  render() {
    return (
      <Router>
        <View>
          <Route exact path='/' component={OutsideContainer}/>
          <Route exact path='/inside' component={InterviewContainer}/>
        </View>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App)
