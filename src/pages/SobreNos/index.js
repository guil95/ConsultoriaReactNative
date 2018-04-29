import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet  } from 'react-native';


class SobreNos extends Component {
  static navigationOptions = {
    title: 'Sobre nós'
  }
  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#FFF'}}>
         <Text>SobreNos</Text>
      </View>
    );
  }
}

export default SobreNos;
