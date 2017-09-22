/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginView from './LoginView'
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'

import {Scene, Router} from 'react-native-router-flux';

class AwesomeProject extends React.Component {
  render() {
    return <Router>
      <Scene key="login" component={HomeView} hideNavBar/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false}/>
      </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
