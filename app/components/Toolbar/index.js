import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Header from './Toolbar';

export default class Toolbar extends Component {
  render () {
    return (
      <View style={styles.toolbar}>
        <Header openDrawer={this.props.callDrawer} />
      </View>
    );
  }
}
