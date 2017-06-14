
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from "./Homeview";
import Icon from 'react-native-vector-icons/Ionicons';

const HOME = 'home';

const CATEGORY = 'category';

const FAXIAN = 'faxian';

const CART = 'cart';


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }
    _renderTabItem(tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Icon name={'ios-home'} size={25} color={'#4E78E7'} />}
                renderSelectedIcon={() => <Icon name={'ios-home'} size={25} color={'#4E78E7'} />}
                onPress={() => this.setState({ selectedTab: tag })}
                title={tag}
                >
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME, <HomePage />)}
                    {this._renderTabItem(CATEGORY, <HomePage />)}
                    {this._renderTabItem(FAXIAN, <HomePage />)}
                    {this._renderTabItem(CART, <HomePage />)}
                </TabNavigator>
            </View >
        );
    }
}



const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});