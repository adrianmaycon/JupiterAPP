import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Container, Icon, Button, View, Fab, } from 'native-base';

export default class PageAcompanhante extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }

  render() {
    return (
      <Container>
        <View style={styles.PostInfoAcomp}>
          <View style={{flex: 4}}>
          <Icon name="ios-contact" style={{fontSize: 90, marginLeft: 10, marginTop: 10}}/>
          </View>
          <View style={{flex: 6}}>
            <Text style={{fontSize: 20, marginTop: 15}}>Adrian Maycon</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5579CF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="md-add" style={{ fontSize: 30 }} />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="ios-medal" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="md-school" />
            </Button>
            <Button disabled style={{ backgroundColor: '#8BCF55' }}>
              <Icon name="md-paw" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="md-color-palette" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  PostInfoAcomp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '96%',
    height: 110,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  }
});