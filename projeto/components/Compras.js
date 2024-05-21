import React from "react";
import {Text, View, StyleSheet, Linking} from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Compras extends React.Component{
  render(){
    return(
    <View style={estilos.container}>
      <Text style={estilos.textoCompra}>{"Alguns lugares que você pode comprar o adesivo anticoncepcional:"}</Text>
      <Spacer size={20} />
      <Text style={estilos.linkUm} onPress={() => {Linking.openURL('https://www.drogariasaopaulo.com.br/evra-johnson-saude-c-3-adesivos/p')}}>{"Drogaria São Paulo"}</Text>
      <Spacer size={20} />
      <Text style={estilos.linkDois} onPress={() => {Linking.openURL('https://www.drogasil.com.br/evra-3-adesivo.html')}}>{"Drogasil"}</Text>
      <Spacer size={20} />
      <Text style={estilos.linkTres} onPress={() => {Linking.openURL('https://www.drogaraia.com.br/evra-3-adesivo.html')}}>{"Droga Raia"}</Text>
      <Spacer size={20} />
      <Text style={estilos.textoInfoCompra}>{"É mais em conta comprar o adesivo pelo site da farmácia e entregar na sua casa ou retirar na loja do que comprar na própria fármacia. Por isso, logo a cima temos o link de três farmácias confiáveis"}</Text>
    </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
    backgroundColor: '#FAEBD7' //antiqueWhite
  },

  textoCompra: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  linkUm: {
    textAlign: 'center',
    fontFamily: "Monaco",
    color: "#DC143C", // Black
    fontSize: 18,
    padding: 10,
  },

  linkDois: {
    textAlign: 'center',
    fontFamily: "Monaco",
    color: "#DC143C", // Black
    fontSize: 18,
    padding: 10,
  },

  linkTres: {
    textAlign: 'center',
    fontFamily: "Monaco",
    color: "#DC143C", // Black
    fontSize: 18,
  },

  textoInfoCompra: {
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#000000", // Black
    fontSize: 15,
  },
})

export default Compras;