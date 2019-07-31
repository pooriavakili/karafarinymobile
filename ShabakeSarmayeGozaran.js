
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class ShabakeSarmayeGozaran extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://drkarafarini.com/%d8%b4%d8%a8%da%a9%d9%87-%d8%b3%d8%b1%d9%85%d8%a7%db%8c%d9%87-%da%af%d8%b0%d8%a7%d8%b1%d8%a7%d9%86/'}}
                style={{marginTop:20}}

            />
        );
    }
}

