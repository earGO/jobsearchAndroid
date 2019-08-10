import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigator from 'react-native-easy-router';
import Screens, {Alternate} from './routes';

const Application = () => (
  <Navigator screens={Alternate} initialStack="Login" />
);

AppRegistry.registerComponent(appName, () => Application);
