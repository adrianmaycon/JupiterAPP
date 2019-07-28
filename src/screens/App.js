import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { HomeScreen, GamerScreen, FieldScreen } from './index';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator(

  {
    Home: HomeScreen,
    Fields: FieldScreen,
    Gamer: GamerScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',

      inactiveTintColor: '#E8D1E8',
      style: {
        backgroundColor: '#7159C1', //#EBFA0D
      },
      showLabel: false,
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Fields'){
          iconName = 'handshake-o';
        } else if (routeName === 'Gamer') {
          iconName = 'leaf';
        }

        return <IconComponent name={iconName} size={33} color={tintColor} />
      }
    })
  }

);

export default createAppContainer(TabNavigator);
