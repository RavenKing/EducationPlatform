import React from 'react';
import {
  Text,
} from 'react-native';

import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers
} from "react-navigation";
import Home2 from '../Components/Home/XMGHomeDetail.js'
import Message from '../Components/Message/XMGMessage.js'
import Collection from '../Components/Collection/XMGCollection.js'
import Mypage from '../Components/Mypage/XMGMypage.js'

const TabbarNavigator = TabNavigator({
    Home: { screen: Home2 },
    Collection: { screen: Collection },
    Message: { screen: Message },
    Mypage: { screen: Mypage }
}, {
    initialRouteName: 'Home'
});


const AppNav = StackNavigator({
  Home: { screen: TabbarNavigator },
  // AgencyPage1:{screen: AgencyPage1},
  // AgencyPage2:{screen: AgencyPage2},
  // Activity:{screen: Activity},
});


export {
	AppNav
};