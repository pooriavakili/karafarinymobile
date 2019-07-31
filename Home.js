import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, ImageBackground, Image} from 'react-native'
import {Header,Left} from 'native-base'
import {Icon} from 'react-native-elements'
export default class Home extends Component {
    render() {
        return (
            <View style={Style.container}>
                <ScrollView>





                    <Header style={Style.Header
                    }>

                        <Left style={Style.Right}>

                            <Icon onPress={()=>
                                this.props.navigation.openDrawer()}
                                  style={Style.Img}
                                  name='menu'
                                  color='white'
                            />



                        </Left>




                    </Header>


                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('moshavereKarAfriny')
                        }}

                    >
                        <ImageBackground style={Style.Img4} source={require('./img/karafariny.jpg')}>

                            <Text style={Style.Text5}>مشاوره کارافرینی</Text>
                        </ImageBackground>

                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('khadamatSaderat')
                        }}
                    >

                        <ImageBackground
                            source={require('./img/saderat.jpg')}
                            style={Style.img9}
                        >
                            <Text style={Style.Text11}>خدمات صادرات</Text>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('shabakeSarmayeGozaran')
                        }}

                    >
                        <ImageBackground style={Style.img10} source={require('./img/sarmayeGozaran.jpg')}>
                            <Text style={Style.Text12}>شبکه سرمایه گذاران</Text>
                        </ImageBackground>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('departemanTablighat')
                        }}

                    >
                        <ImageBackground style={Style.img14} source={require('./img/tablighat.jpg')}>
                            <Text style={Style.Text15}> تبلیغات</Text>
                        </ImageBackground>
                    </TouchableWithoutFeedback>


                </ScrollView>

            </View>


        );
    }
}




const Style=StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        backgroundColor:'#03022c',
        top:-10

    },
    img10:{
        width:80,
        height:80,
        top:-110,
        left:320
    },

    Right:{
        right:-210
    },
    img9:{
        width:80,
        height:80,

        top:-30,
        left:160
    },
    Text12:{
        fontSize:20,
        color:"black",
        width:"130%",
        top:90,
        right:30
    },
    Img:{
        height:60,
        width:60,


    },
    Text11:{
        fontSize:20,
        color:"black",
        width:"130%",
        top:90,
        right:10
    },
    Text1:{

        fontSize:20,
        color:"#03022c"

    },


    Img4:{
        width:80,
        height: 80,
        top:50,
        left:10
    },
    Text5:{
        right:20,
        top:90,
        fontSize:20,
        color:'black',
        width:'150%',
        direction:"rtl"
    },
    img6:{
        top:-20,
        width:80,
        height:80,
        left:10
    },
    Text7:{
        top:80,
        right:20,
        fontSize:20,
        width:'150%',
        color:"black",
        direction:'rtl'
    },

    img7:{
        left:20,
        width:80,
        height:80,
        top:-100
    },
    Text8:{
        fontSize:20,
        color:"black",
        width:'130%',
        direction:"rtl",
        top:100,
        right:30
    },
    img8:{
        left:320,
        width:80,
        height:80,
        top:-180

    },
    Text9:{
        fontSize:20,
        color:"black",
        width:'130%',
        direction:"rtl",
        top:80,
        right:20
    },

    img12:{
        top:-180,
        left:180,
        width:80,
        height:80
    },

    img14:{
        width:80,
        height:80,
        top:-30,
        left:50
    },
    Text15:{
        fontSize:20,
        color:"black",
        width:"150%",
        direction:"rtl",
        top:80,
        right:40
    }




})