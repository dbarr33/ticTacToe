import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

// Components
import Space from '../../components/space/space';
import NewGame from '../../components/buttons/newGame';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      selectedValues: {},
      winner: ''
    };
  }

  selectionOnPress(position) {
    const selectedValues = Object.assign({}, this.state.selectedValues);
    selectedValues[position] = this.state.currentPlayer;
    this.setState({
      selectedValues,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    });

    for (let i = 0; i < 3; i++) {
      if (selectedValues[`0,${i}`] && selectedValues[`0,${i}`] === selectedValues[`1,${i}`] && selectedValues[`1,${i}`] === selectedValues[`2,${i}`]) {
        this.setState({ winner: selectedValues[`0,${i}`] });
      } else if (selectedValues[`${i},0`] && selectedValues[`${i},0`] === selectedValues[`${i},1`] && selectedValues[`${i},1`] === selectedValues[`${i},2`]) {
        this.setState({ winner: selectedValues[`${i},0`] });
      }
    }
    if (selectedValues['1,1'] && selectedValues['0,0'] === selectedValues['1,1'] && selectedValues['1,1'] === selectedValues['2,2']) {
      this.setState({ winner: selectedValues['1,1'] });
    } else if (selectedValues['1,1'] && selectedValues['2,0'] === selectedValues['1,1'] && selectedValues['1,1'] === selectedValues['0,2']) {
      this.setState({ winner: selectedValues['1,1'] });
    }
  }

  resetGame() {
    this.setState({
      currentPlayer: 'X',
      selectedValues: {},
      winner: ''
    });
  }

  renderSelection(position) {
    return (
      <Space
        disabled={this.state.winner !== ''}
        selection={this.state.selectedValues[position]}
        position={position}
        onPress={this.selectionOnPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          { this.state.winner !== '' && <Text style={styles.winnerText}>{'Winner: ' + this.state.winner}</Text> }
          <Text style={this.state.currentPlayer === 'X' ? styles.playerX : styles.playerO}>{this.state.currentPlayer}</Text>
        </View>
        <View>
          <View style={styles.row}>
            {this.renderSelection('0,0')}
            <View style={styles.verticalLine} />
            {this.renderSelection('0,1')}
            <View style={styles.verticalLine} />
            {this.renderSelection('0,2')}
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.row}>
            {this.renderSelection('1,0')}
            <View style={styles.verticalLine} />
            {this.renderSelection('1,1')}
            <View style={styles.verticalLine} />
            {this.renderSelection('1,2')}
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.row}>
            {this.renderSelection('2,0')}
            <View style={styles.verticalLine} />
            {this.renderSelection('2,1')}
            <View style={styles.verticalLine} />
            {this.renderSelection('2,2')}
          </View>
        </View>
        <View style={styles.newGame}>
          <NewGame onPress={this.resetGame.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#008080',
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row'
  },
  verticalLine: {
    backgroundColor: '#40e0d0',
    width: 5,
  },
  horizontalLine: {
    backgroundColor: '#40e0d0',
    height: 5,
    alignSelf: 'stretch'
  },
  winnerText: {
    fontSize: 40,
    fontWeight: '600',
    color: '#dddddd',
  },
  playerX: {
    fontSize: 40,
    fontWeight: '600',
    color: '#333333',
  },
  newGame: {
    marginTop: 40,
  },
  header: {
    height: 80,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerO: {
    fontSize: 40,
    fontWeight: '600',
    color: '#dddddd',
  }
});

export default Board;
