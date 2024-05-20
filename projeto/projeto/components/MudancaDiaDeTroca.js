import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class MudancaDiaDeTroca extends React.Component{
  render(){
    return(
    <View style={estilos.container}>
      <Text style={estilos.perguntaTroca}>{"Digite aqui o seu novo dia da semana de troca:"}</Text>
      <Spacer size={20} />
      <TextInput style={estilos.caixaTroca}></TextInput>
      <Spacer size={20} />
      <Text style={estilos.textoInfoTroca}>{"Lembrando que para alterar o dia de troca precisa ser na primeira semana do adesivo. Ou seja, estou acostumada a colar toda segunda-feira, mas eu esqueci ou não quero colar as segundas, dessa forma, em vez de colar na segunda poderá escolher outro dia para colar, por exemplo na quarta-feira ou sexta-feira"}</Text>
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

    perguntaTroca: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  caixaTroca: {
    borderWidth: 2,
    borderColor: "#DC143C",
    fontSize: 25,
    width: 280,
    marginButton: "10px",
    textAlign: "center"
  },

  textoInfoTroca: {
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#000000", // Black
    fontSize: 15,
  },
})

export default MudancaDiaDeTroca;