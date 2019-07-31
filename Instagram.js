
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class Instagram extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://www.instagram.com/drkarafarini/'}}
                style={{marginTop:20}}

            />
        );
    }
}

