import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
        padding: 10,
        height: 60
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    }
})
class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}> {this.props.title} </Text>
      </View>
    );
  }
}

export default BarraNavegacao;
