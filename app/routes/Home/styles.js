import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#EEEEEE'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 30
  },
  welcome: {
    margin: 10
  },
  instructions: {
    color: '#333333',
    marginBottom: 5
  },
  locationImageContainer: {
    minHeight: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationImage: {
    height: 200,
    width: 200
  }
});

export default styles;
