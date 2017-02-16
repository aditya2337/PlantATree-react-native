import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './routes/Home';

export default class PlantATree extends Component {
  render () {
    return (
      <Router>
        <Scene key='root' hideNavBar={true}>
          <Scene key='pageOne' component={Home} initial={true} />
        </Scene>
      </Router>
    );
  }
}
