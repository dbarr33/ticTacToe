import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import Board from '../board/board';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
