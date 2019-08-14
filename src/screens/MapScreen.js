import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Instituicoes, MapScreen } from './index';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator(

    {
        Map: MapScreen,
        Instituicoes: Instituicoes,
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
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
                let iconName;

                if (routeName === 'Map') {
                    iconName = 'map-marker';
                } else if (routeName === 'Instituicoes') {
                    iconName = 'list-alt';
                }

                return <IconComponent name={iconName} size={33} color={tintColor} />
            }
        })
    }

);

export default createAppContainer(TabNavigator);
