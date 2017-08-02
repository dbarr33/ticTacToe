import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class NewGame extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={styles.text}>New Game</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 5,
    color: '#333333'
  },
});

export default NewGame;
