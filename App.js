import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/screens/Login'

const LoginStack = createStackNavigator({ Login })


export default createAppContainer(
	createSwitchNavigator(
		{
			Login: LoginStack,
		},
		{
			initialRouteName: 'Login'
		}
	)
);
