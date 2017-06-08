import React, { Component } from 'react'
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from 'react-vr'
import { connect } from 'react-redux'
import { actionCreators as routeActionCreators, routes } from '../redux/route'
import { withRouter } from 'react-router'

const styles = StyleSheet.create({
  doorwayButton: {
    transform: [
      {rotateY: -90},
      {translate: [0, 0, -3]},
    ]
  },
  doorwayImage: {
    width: 1,
    height: 1,
  }
})

class OutsideContainer extends Component {
  state = {
    pano: asset('outsideRoom7.jpg'),
  }

  onDoorKnobEnter = () => {
    this.props.dispatch(routeActionCreators.push(routes.interview))
    this.props.history.replace('/inside')
  }

  render() {
    return (
      <View>
        <Pano source={this.state.pano}/>
        {<VrButton
          style={styles.doorwayButton}
          onEnter={this.onDoorKnobEnter}>
          <Image style={styles.doorwayImage}
            source={asset('doorway.png')}
            >
          </Image>
        </VrButton>}
      </View>
    )
  }
}

export default connect()(OutsideContainer)
