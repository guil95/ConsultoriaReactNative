import React, { Component } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import BarraNavegacao from '../../components/BarraNavegacao'

const styles =  StyleSheet.create({
  logo:{
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo:{
    flexDirection: 'row',
  },
  imgmenu:{
    margin: 15
  }
})

const logo = require('../../assets/img/logo.png')

const menuCliente = require('../../assets/img/menu_cliente.png')
const menuContato = require('../../assets/img/menu_contato.png')
const menuEmpresa = require('../../assets/img/menu_empresa.png')
const menuServico = require('../../assets/img/menu_servico.png')
class CenaPrincipal extends Component {
  static navigationOptions = {
    title: 'Atm Consultoria'
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={{backgroundColor: '#FFF', height: '100%'}}>
          <StatusBar
             backgroundColor="#ccc"
          />
        <View style={styles.logo}>
          <Image source={logo}/>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableOpacity
              onPress = {() => { navigate('CenaClientes')}} 
            >
             <Image style={styles.imgmenu} source={menuCliente}/>
             </TouchableOpacity>
            <Image style={styles.imgmenu} source={menuContato}/>
          </View>
          <View style={styles.menuGrupo}>
            <Image style={styles.imgmenu} source={menuEmpresa}/>
            <Image style={styles.imgmenu} source={menuServico}/>
          </View>

        </View>
        
      </View>
    );
  }
}

export default CenaPrincipal;
