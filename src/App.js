import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyBC0_IXNgNHRz22NthNqqF9Drq494JQIP0',
  authDomain: 'manager-752cb.firebaseapp.com',
  databaseURL: 'https://manager-752cb.firebaseio.com',
  projectId: 'manager-752cb',
  storageBucket: '',
  messagingSenderId: '417654906516'
};
firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
