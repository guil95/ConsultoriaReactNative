import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet, ScrollView } from 'react-native';


class SobreNos extends Component {
  static navigationOptions = {
    title: 'Sobre nós',
    headerStyle: {
      backgroundColor: '#ec7148',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>SobreNos</Text>
      </ScrollView>
    );
  }
}

export default SobreNos;
