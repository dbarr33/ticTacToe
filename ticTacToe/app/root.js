import React, { Component } from 'react';
import codePush, { InstallMode } from 'react-native-code-push';

import App from './containers/app/app';

class Root extends Component {
  componentDidMount() {
    codePush.sync({ installMode: InstallMode.IMMEDIATE });
  }

  render() {
    return (
      <App />
    );
  }
}

export default Root;
