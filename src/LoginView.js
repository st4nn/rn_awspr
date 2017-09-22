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
} from 'react-native';

import FBSDK , {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk',
const  = FBSDK;

import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

export default class LoginView extends Component {

  handleLoginFinish = {
    (error, result) => {
      if (error) {
        console.error(error);
      } else if (result.isCancelled) {
        alert("login is cancelled.");
      } else {
        AccessToken.getCurrentAccessToken().then(()  => {
          Actions.root()
        })
      }
    }
  }
  
  render() {
    const artists = this.state.artists

    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Bienvenido
          </Text>

          <View>
            <LoginButton
              readPermissions={["public_profile", 'email']}
              onLoginFinished={
                handleLoginFinish()
              }
              onLogoutFinished={() => alert("logout.")}/>
          </View>
        </View>


      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems : 'center'
  },
  welcome : {
    fontSize : 24,
    fontWeight : '600',
    marginBottom : 20,
  }
});

