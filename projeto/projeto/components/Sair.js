import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Sair extends React.Component{
  render(){
    return(
      <View style={estilos.container}>
      <Text style={estilos.perguntaSair}>{"Realmente deseja sair? Você será direcionado para a página inicial"}</Text>
      <Spacer size={20} />
      <TouchableOpacity style={estilos.botaoSair} onPress={()=>this.goToInicio()}>
      <Text style={estilos.textoBotaoSair}>Sair</Text>
      </TouchableOpacity>
    </View>
    )
  }
  goToInicio(){
    this.props.navigation.navigate("Início");
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

  perguntaSair: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25,
  },

  botaoSair: {
    backgroundColor: "#DC143C", // Crimson
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

    textoBotaoSair: {
    color: "#FFFFFF", // White
    fontSize: 18,
    fontFamily: "Candara Light",
    fontWeight: 'bold'
  },
})
  
export default Sair;