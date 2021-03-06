import React, { Component } from 'react'
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr'
import { connect } from 'react-redux'
import { MemoryRouter } from 'react-router'

const styles = StyleSheet.create({
  welcomeText: {
    backgroundColor: '#777879',
    fontSize: 0.1,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 0, -3]}],
  }
})

class InterviewContainer extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('room7.jpg')}/>
        <Text
          style={styles.welcomeText}>
          Hello, World
        </Text>
      </View>
    )
  }
}

export default connect()(InterviewContainer)
