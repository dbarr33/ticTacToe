import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Selection extends Component {
  static propTypes = {
    selection: PropTypes.string,
    position: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
  }

  render() {
    const { selection, onPress, position, disabled } = this.props;
    return (
      <TouchableOpacity
        disabled={selection !== '' || disabled}
        style={styles.container}
        onPress={() => { onPress(position); }}
      >
        <Text style={selection === 'X' ? styles.playerX : styles.playerO}>{selection}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerX: {
    fontSize: 40,
    fontWeight: '600',
    color: '#333333'
  },
  playerO: {
    fontSize: 40,
    fontWeight: '600',
    color: '#dddddd'
  }
});

Selection.defaultProps = {
  selection: ''
};

export default Selection;
