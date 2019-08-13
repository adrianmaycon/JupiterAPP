import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bar, Button, TitleCenter, Title } from './styles/HeaderStyled';

export default Header = props => {
    const toggleDrawerButtonPressed = () => props.navigation.toggleDrawer();

    return (
        <Bar>
            <Image
                style={{ width: 35, height: 35, marginLeft: 10 }}
                source={{ uri: 'https://resources.construx.com/wp-content/uploads/2016/08/brain-bite.png' }}
            />
            <TitleCenter>
                <Title>{props.title}</Title>
            </TitleCenter>
            <Button>
                <Icon name="search" size={18} color="#fff" />
            </Button>
            <Button>
                <Icon name="heart" size={18} color="#fff" />
            </Button>
            <Button onPress={toggleDrawerButtonPressed}>
                <Icon name="navicon" size={18} color="#fff" />
            </Button>
        </Bar>
    );
}