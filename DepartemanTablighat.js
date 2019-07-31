
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class DepartemanTablighat extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://drkarafarini.com/%d8%af%d9%be%d8%a7%d8%b1%d8%aa%d9%85%d8%a7%d9%86-%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/'}}
                style={{marginTop:20}}

            />
        );
    }
}

