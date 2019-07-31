/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator,createDrawerNavigator} from 'react-navigation'

import Mix from './Mix/Mix'
export default class App extends Component {
  render() {
    return (
<Mix/>
    );
  }
}


