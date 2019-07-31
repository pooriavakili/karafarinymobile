
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class MoshavereKarAfariny extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://drkarafarini.com/%d9%85%d8%b4%d8%a7%d9%88%d8%b1%d9%87-%da%a9%d8%a7%d8%b1%d8%a2%d9%81%d8%b1%db%8c%d9%86%db%8c/'}}
                style={{marginTop:20}}

            />
        );
    }
}

