import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Todo from './containers/Todo';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}


// import React, { Component } from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// export default class App extends Component {

//   render() {
//     return (
//       <View>
//         <Text style={styles.text}>Test</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   text: {
//     flex: 1,
//     padding: 15,
//     fontSize: 15,
//     backgroundColor: 'green',
//   }
// })

