/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './Artistlist'
import { getArtists} from './api-client'

export default class HomeView extends Component {
  state = {
    artists : []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists : data}))
  }


  render() {
    const artists = this.state.artists

    return (
      <ArtistList artists={artists} />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop : 50    
  }
});

