import {StackNavigator} from 'react-navigation'
import Home from './../Home'
import MoshavereKarAfariny from './../MoshavereKarAfariny'
import KhadamatSaderat from './../KhadamatSaderat'
import ShabakeSarmayeGozaran from './../ShabakeSarmayeGozaran'
import DepartemanTablighat from './../DepartemanTablighat'
import Telgram from "../Telgram";
import Instagram from '../Instagram'
export default Stack=StackNavigator({
home:{
    screen:Home,

},
    moshavereKarAfriny:{screen:MoshavereKarAfariny},
    khadamatSaderat:{screen:KhadamatSaderat},
    shabakeSarmayeGozaran:{screen:ShabakeSarmayeGozaran},
    departemanTablighat:{screen:DepartemanTablighat},
    telgram:{screen:Telgram},
    instagram:{screen:Instagram}

},{
    navigationOptions:{
        header:null
    }
})