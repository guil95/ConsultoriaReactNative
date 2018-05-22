import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet, ScrollView  } from 'react-native';


class Contato extends Component {
  static navigationOptions = {
    title: 'Contato',
    headerStyle: {
      backgroundColor: '#61bd8c',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>Contato</Text>
      </ScrollView>
    );
  }
}

export default Contato;
