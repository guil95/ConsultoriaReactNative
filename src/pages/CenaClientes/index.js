import React, { Component } from 'react';
import { View, Text, StatusBar, Image,StyleSheet  } from 'react-native';

import BarraNavegacao from '../../components/BarraNavegacao'

const detalheCliente = require('../../assets/img/detalhe_cliente.png')
const cliente1 = require('../../assets/img/cliente1.png')
const cliente2 = require('../../assets/img/cliente2.png')

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo:{
        fontSize: 30,
        color: '#b9c941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente:{
        marginTop: 10,
        padding: 20,
    
    },
    txtDetalhesCliente:{
        fontSize: 18,
        marginLeft: 20
    }
})


class CenaClientes extends Component {
  static navigationOptions = {
    title: 'Clientes',
    headerMode: 'none',
    cardStyle: { backgroundColor: 'transparent'}
  }
  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#FFF'}}>
          <StatusBar
            backgroundColor= '#b9c941'
            barStyle="light-content"
          />
          <View style={styles.cabecalho}>
            <Image source={detalheCliente} />
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
          </View>
          <View style={styles.detalheCliente}>
            <Image source={cliente1} />
            <Text style={styles.txtDetalhesCliente}>Cliente 1</Text>
          </View>
          <View style={styles.detalheCliente}>
            <Image source={cliente2} />
            <Text style={styles.txtDetalhesCliente}>Cliente 2</Text>
          </View>
      </View>
    );
  }
}

export default CenaClientes;
