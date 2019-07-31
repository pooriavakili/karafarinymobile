
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Image,
    TouchableWithoutFeedback
}from 'react-native'

import React,{Component} from 'react'



export default class ErtebatBaMa extends Component{

    render(){
        return(
            <View>
                <View style={Style.Touch}>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('telgram')
                        }}
                    >
                        <Image
                            style={Style.Image4}
                            source={require('./img/telgram.jpg')}
                        />



                    </TouchableWithoutFeedback>
                    <Text style={Style.text}>تلگرام</Text>
                </View>
                <View style={Style.Touch2}>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('instagram')
                        }}
                    >
                        <Image
                            style={Style.Image5}
                            source={require('./img/instagram.jpg')}
                        />

                    </TouchableWithoutFeedback>
                    <Text style={Style.text}>اینستاگرام</Text>
                </View>

            </View>
        )
    }
}
const Style=StyleSheet.create({
    Touch:{
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        top:70
    },
    Touch2:{
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        top:90
    },
    text:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        right:60,
        bottom:20
    },
    Image4:{
        width:50,
        height:50,
        left:350,
        top:20

    },
    Image5:{
        width:50,
        height:50,
        left:350,
        top:20
    }
})

