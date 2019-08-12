import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Login from './src/screens/Login';
import DrawerContainer from './src/components/DrawerContainer';
import Header from './src/components/Header';

import MapScreen from './src/screens/MapScreen';
import Dashboard from './src/screens/App';
import ProfileScreen from './src/screens/ProfileScreen';
import BooksScreen from './src/screens/BooksScreen';

const LoginStack = createStackNavigator({ Login });

const DashboardStack = createStackNavigator({
	Dashboard: {
		screen: Dashboard,
		headerMode: 'screen',
		navigationOptions: ({ navigation }) => ({
			header: () => <Header navigation={navigation} title="Bem Vindo" />
		})
	}
})

const ProfileScreenStack = createStackNavigator({
	ProfileScreen: {
		screen: ProfileScreen,
		headerMode: 'screen',
		navigationOptions: ({ navigation }) => ({
			header: () => <Header navigation={navigation} title="Meus Dados" />
		})
	}
})

const MapScreenStack = createStackNavigator({
	MapScreen: {
		screen: MapScreen,
		headerMode: 'screen',
		navigationOptions: ({ navigation }) => ({
			header: () => <Header navigation={navigation} title="Localizar..." />
		})
	}
})

const BooksScreenStack = createStackNavigator({
	BooksScreen: {
		screen: BooksScreen,
		headerMode: 'screen',
		navigationOptions: ({ navigation }) => ({
			header: () => <Header navigation={navigation} title="Meus Livros" />
		})
	}
})

const AppDrawer = createDrawerNavigator(
	{
		Dashboard: DashboardStack,
		ProfileScreen: ProfileScreenStack,
		MapScreen: MapScreenStack,
		BooksScreen: BooksScreenStack,
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
