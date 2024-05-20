import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class OndeColar extends React.Component{
  render(){
    return(
    <View style={estilos.container}>
      <Text style={estilos.perguntaColar}>{"Possíveis locais para colar:"}</Text>
       <Image style={estilos.imagemBarriga} source={require("../assets/ondeColarBarriga.png")}/>
      <Text style={estilos.textoColaBarriga}>{"ABDÓMEN"}</Text>
      <Image style={estilos.imagemGluteo} source={require("../assets/ondeColarGluteo.png")}/>
      <Text style={estilos.textoColaGluteo}>{"GLÚTEO"}</Text>
      <Image style={estilos.imagemBraco} source={require("../assets/ondeColarBraco.png")}/>
      <Text style={estilos.textoColaBraco}>{"BRAÇO"}</Text>
      <Image style={estilos.imagemCostas} source={require("../assets/ondeColarCostas.png")}/>
      <Text style={estilos.textoColaCostas}>{"COSTAS"}</Text>
    </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 20,
    backgroundColor: '#FAEBD7' //antiqueWhite
  },

  perguntaColar: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  textoColaBarriga: {
    position: 'absolute',
    top: 75,
    left: 57.5,
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#FFFFFF", // Black
    fontSize: 15,
    backgroundColor: "#DC143C",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#DC143C",
  },

  imagemBarriga: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 110,
    left: 50,
    borderRadius: 10,
    borderColor: "#DC143C",
    borderWidth: 2
  },

  textoColaGluteo: {
    position: 'absolute',
    top: 245,
    left: 64,
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#FFFFFF", // Black
    fontSize: 15,
    backgroundColor: "#DC143C",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#DC143C",
  },

  textoColaBraco: {
    position: 'absolute',
    top: 75,
    right: 69,
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#FFFFFF", // Black
    fontSize: 15,
    backgroundColor: "#DC143C",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#DC143C",
  },

  imagemBraco: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 110,
    right: 50,
    borderRadius: 10,
    borderColor: "#DC143C",
    borderWidth: 2
  },

  imagemGluteo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 280,
    left: 50,
    borderRadius: 10,
    borderColor: "#DC143C",
    borderWidth: 2
  },

  textoColaCostas: {
    position: 'absolute',
    top: 245,
    right: 68,
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#FFFFFF", // Black
    fontSize: 15,
    backgroundColor: "#DC143C",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#DC143C",
  },

  imagemCostas: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 280,
    right: 50,
    borderRadius: 10,
    borderColor: "#DC143C",
    borderWidth: 2
  },
})

export default OndeColar;