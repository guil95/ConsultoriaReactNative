import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet  } from 'react-native';


class Servicos extends Component {
  static navigationOptions = {
    title: 'Serviços'
  }
  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>Servicos</Text>
      </View>
    );
  }
}

export default Servicos;
