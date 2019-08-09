import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'

export default class Aks extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('home')
        },2000)
    }

    render() {
        return (
            <View style={Style.container}>

<View style={Style.Asly}>
    <Image source={require('./img/logo.jpg')}
    style={Style.img2}

    />
    <Text style={Style.Text16}>دکتر کارافرینی</Text>

</View>
            </View>
        );
    }
}
const Style=StyleSheet.create({
    container:{
flex:1,
        alignItems: "center",
        justifyContent: "center"

    },


    Asly:{

        top:-50,
       right:0
    },
    img2:{
        width:200,
        height: 200
    },
    Text16:{
        fontSize:20,
        color:"black",
        top:20,
        right:40
    }

})

