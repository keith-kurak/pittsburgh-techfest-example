import React, { Component } from 'react';
import { View } from 'react-native';
import Storyboard from './storyboard';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Storyboard />
      </View>
    );
  }
}
