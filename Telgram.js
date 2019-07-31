
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class Telgram extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://t.me/drkarafarini'}}
                style={{marginTop:20}}

            />
        );
    }
}

