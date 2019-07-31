import {SwitchNavigator,DrawerNavigator} from 'react-navigation'
import Home from './../Home'
import Stack from './Stack'
import ErtebatBaMa from './../ErtebatBaMa'
const Switch=SwitchNavigator( {
  Stack,


})
export default Drawer=DrawerNavigator({
    Switch:{
        screen:Switch,
        navigationOptions:{
            drawerLabel:"دکترکارافرینی"
        }
    },
    home:{screen:Home,
        navigationOptions:{
            drawerLabel:"صفحه اصلی"
        }
    },
    ertebatBaMa:{screen:ErtebatBaMa,
        navigationOptions: {
            drawerLabel:"ارتباط با ما"
        }

    },




},{
    drawerPosition:'right',
    drawerWidth:200,
    navigationOptions:{
        header:null
    }

})
