import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet  } from 'react-native';


class Contato extends Component {
  static navigationOptions = {
    title: 'Contato'
  }
  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>Contato</Text>
      </View>
    );
  }
}

export default Contato;
