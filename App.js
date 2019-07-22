import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Login from './src/screens/Login';
import DrawerContainer from './src/components/DrawerContainer';
import Header from './src/components/Header';

import Dashboard from './src/screens/Dashboard';

const LoginStack = createStackNavigator({ Login });

const DashboardStack = createStackNavigator({
	Dashboard: {
		screen: Dashboard,
		headerMode: 'screen',
		navigationOptions: ({ navigation }) => ({
			header: () => <Header navigation={navigation} title="Dashboard" />
		})
	}
})

const AppDrawer = createDrawerNavigator(
	{
		Dashboard: DashboardStack,
	},
	{
		contentComponent: ({ navigation }) => <DrawerContainer navigation={navigation} />,
		drawerWidth: 300,
	}
);

export default createAppContainer(
	createSwitchNavigator(
		{
      Login: LoginStack,
      App: AppDrawer,
		},
		{
			initialRouteName: 'Login'
		}
	)
);
