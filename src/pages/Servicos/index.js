import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet, ScrollView  } from 'react-native';


class Servicos extends Component {
  static navigationOptions = {
    title: 'Serviços',
    headerStyle: {
      backgroundColor: '#19d1c8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>Servicos</Text>
      </ScrollView>
    );
  }
}

export default Servicos;
