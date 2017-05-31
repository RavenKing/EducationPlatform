import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers
} from "react-navigation";

import Home from '../Home/XMGhome2';
import Agency1 from '../Agency/AgencyPage1'
import Agency2 from '../Agency/AgencyPage2'
import Activity from '../Agency/Activity'
//import Collection from '../Collection/XMGColleciton'
import Message from '../Message/XMGMessage'
import Mypage from '../Mypage/XMGMypage'

const TabbarNavigator = TabNavigator({
    Home: { screen: Home },
    Mypage: { screen: Mypage }
    //Collection: { screen: Collection },
    //Message: { screen: Message },
}, {
    initialRouteName: 'Home'
});

const AppNavigator = StackNavigator({
    TabBar: {
        screen: TabbarNavigator,
        navigationOptions: {
            header: null
        }
    },

});

export {
    AppNavigator
};
