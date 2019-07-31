
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class KhadamatSaderat extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://drkarafarini.com/%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%b5%d8%a7%d8%af%d8%b1%d8%a7%d8%aa/'}}
                style={{marginTop:20}}

            />
        );
    }
}
