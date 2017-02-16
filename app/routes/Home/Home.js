import React, { Component } from 'react';
import {
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Toolbar from '../../components/Toolbar';
import HomeContainer from './HomeContainer';
import styles from './styles';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      height: 50,
      backgroundColor: 'green'
    }
  }
};

export default class HomeScreen extends Component {

  constructor (props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {openStatus: true};
  }

  openDrawer () {
    this.refs['DRAWER_REF'].openDrawer();
  }

  render () {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        ref={'DRAWER_REF'}
        renderNavigationView={() => navigationView}>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={styles.main}>
            <Toolbar callDrawer={this.openDrawer} />
            <HomeContainer />
          </View>
        </ThemeProvider>
      </DrawerLayoutAndroid>
    );
  }
}
