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

import ArtistBox from './ArtistBox'

export default class ArtistDetailView extends Component {

  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop : 0 
  }
});

