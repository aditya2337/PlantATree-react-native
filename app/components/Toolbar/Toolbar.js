import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

export default class Header extends Component {

  render () {
    return (
      <Toolbar
        leftElement='menu'
        centerElement='Plant A Tree'
        onLeftElementPress={this.props.openDrawer}
      />
    );
  }
}
