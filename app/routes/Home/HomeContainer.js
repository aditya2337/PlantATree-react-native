import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { Button } from 'react-native-material-ui';
import images from '../../config/images';
import styles from './styles';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true};
  }

  render () {
    return (
      <View>
        <View style={styles.locationImageContainer}>
          <Image source={images.location} style={styles.locationImage} />
        </View>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Button raised default text='Near a Vicinity?'
              icon='transfer-within-a-station' />
          </View>
          <View style={styles.welcome}>
            <Button raised default text='Along a route'
              icon='directions-car' />
          </View>
        </View>
      </View>
    );
  }
}
