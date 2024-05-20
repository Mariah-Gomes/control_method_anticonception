import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Sair from './components/Sair'
import Calendario from './components/Calendario'
import MudancaDiaDeTroca from './components/MudancaDiaDeTroca'
import Compras from './components/Compras'
import OndeColar from './components/OndeColar'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Inicio extends React.Component{
  render(){
    return(
    <View style={estilos.container}>
    <Text style={estilos.textoTitulo}>{"Bem-vindo ao Control Method Anticonception"}</Text>
    <Spacer size={20} />
    <TouchableOpacity style={estilos.button} onPress={()=>this.goToEntrar()}>
      <Text style={estilos.textoBotao}>Entrar</Text>
    </TouchableOpacity>    
    </View>
    )
  }
  goToEntrar(){
    this.props.navigation.navigate("Entrar");
  }
}

class Entrar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dia: undefined,
      periodo: undefined,
    }
    this.cont = false;
  }

  render(){
    return(
    <View style={estilos.container}>
      <Text style={estilos.subTitulo}>{"Digite quando é seu dia da semana de troca:"}</Text>
      <Spacer size={20} />
      <TextInput style={estilos.caixaSub} onChangeText={(texto)=>this.setState({dia: texto})}></TextInput>
      <Spacer size={20} />
      <Text style={estilos.subTitulo1}>{"Digite em qual troca você está:"}</Text>
      <Spacer size={20} />
      <TextInput style={estilos.caixaSub1} onChangeText={(texto)=>this.setState({periodo: texto})}></TextInput>
      <Spacer size={20} />
      <Text style={estilos.textoInfoDiaDeTroca}>{"O dia de troca é quando você aplica o adesivo pela primeira vez em um determinado dia da semana e, em seguida, realiza três trocas ao longo do mês, seguidas por uma semana de pausa. Importante ressaltar que as trocas ocorrem sempre no mesmo dia da semana, uma semana após a aplicação inicial. Por exemplo, se você colocou o adesivo pela primeira vez em uma segunda-feira, a próxima troca será na segunda-feira seguinte, e assim por diante. "} </Text>
      <Spacer size={20} />
      <TouchableOpacity style={estilos.buttonHome} onPress={()=>this.cadastrarDia()}>
        <Text style={estilos.textoBotaoHome}>Home</Text>
      </TouchableOpacity>
    </View>
    )
  }
  async cadastrarDia(){
    try{
      await AsyncStorage.setItem(this.state.dia, this.state.periodo);
      let dia = await AsyncStorage.getItem(this.state.dia);
      let periodo = await AsyncStorage.getItem(this.state.periodo);
      if(dia == null && periodo == null){
        alert("Insira os dados que se pede para utilizar o app");
      }
      else if(dia == null && periodo != null){
        alert("Digite o dia de troca");
      }
      else if(dia != null && periodo == null){
        alert("Digite em qual período você está");
      }
      else if(dia != null && periodo != null){
        this.props.navigation.navigate("Home");
      }
    }
    catch(erro){
      console.log(erro);
    }
  }
}

class Nav2 extends React.Component {
  render() {
    return (
      <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#DC143C',
      },
      drawerActiveTintColor: "#FFFFFF",
      drawerInactiveTintColor: '#FFFFFF'
      }}>

      <Drawer.Screen name="Home" component={Home}
      options={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#DC143C'}, /*#FA8072*/
        headerTitleStyle: {fontWeight: 'bold', fontFamily: "Candara Light", 
        color: "#FFFFFF"}}}/>

      <Drawer.Screen name="Calendário" component={Calendario} 
      options={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#DC143C'}, /*#FA8072*/
        headerTitleStyle: {fontWeight: 'bold', fontFamily: "Candara Light", 
        color: "#FFFFFF"}}}/>
      
      <Drawer.Screen name="Mudança do dia de troca" component={MudancaDiaDeTroca}
      options={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#DC143C'}, /*#FA8072*/
        headerTitleStyle: {fontWeight: 'bold', fontFamily: "Candara Light", 
        color: "#FFFFFF"}}}/>
      
      <Drawer.Screen name="Onde colar?" component={OndeColar}
      options={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#DC143C'}, /*#FA8072*/
        headerTitleStyle: {fontWeight: 'bold', fontFamily: "Candara Light", 
        color: "#FFFFFF"}}}/>

      <Drawer.Screen name="Compras" component={Compras}
      options={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#DC143C'}, /*#FA8072*/
        headerTitleStyle: {fontWeight: 'bold', fontFamily: "Candara Light", 
        color: "#FFFFFF"}}}/>

      <Drawer.Screen name="Sair" component={Sair} options={{headerShown: false}}/>
      </Drawer.Navigator>
    );
  }
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: new Date(),
      options : { weekday: "long" },
    };
  }
  
  render(){
    if(this.cont == true){
       <Text></Text>
      }
    return(
      <View style={estilos.container}>
      <Text style={estilos.textoTituloHome}>{"Ciclo atual:"}</Text>
      <Text>{"Mostrar os dias de troca do ciclo da mulher - Marcar em qual adesivo ela está"}</Text>
      <Text>{"Mostrar sempre que é melhor a mulher comprar o adesivo no terceiro adesivo e na semana de pausa (Colocar um lembrete de compra e colocar algo marcando se ela já comprou o adesivo para a próxima sequência ou não) "}</Text>
     
      <Text>{this.state.data.toLocaleString("pt-BR", this.state.options)}</Text>
      <Text>{"Infos para ajudar a mulher"}</Text>
    </View>
    )
  }

  async calculoDia(){
    try{
      let calculoDia = await AsyncStorage.getItem(this.state.dia);
      let calculoPeriodo = await AsyncStorage.getItem(this.state.periodo);
      let diaSemanaAtual = this.state.data.toLocaleString("pt-BR", this.state.options);
      if(calculoDia == 'segunda-feira' && calculoPeriodo == 'Primeiro'){  
        if(diaSemanaAtual != calculoDia){
            alert("VAI DORMIR KRL");
        }
            this.cont = true;
            var segundo;
          
           
          
        }
      
    }
    catch(erro){
      console.log(erro);
    }
  }
}

class App extends React.Component {
  render() {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="Entrar" component={Entrar} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Nav2} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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

  textoTitulo: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 30
  },

  button: {
    backgroundColor: "#DC143C", // Crimson
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#FFFFFF", // White
    fontSize: 18,
    fontFamily: "Candara Light",
    fontWeight: 'bold'
  },

  subTitulo: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  caixaSub: {
    borderWidth: 2,
    borderColor: "#DC143C",
    fontSize: 25,
    width: 280,
    marginButton: "10px",
    textAlign: "center"
  },

  subTitulo1: {
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  caixaSub1: {
    borderWidth: 2,
    borderColor: "#DC143C",
    fontSize: 25,
    width: 280,
    marginButton: "10px",
    textAlign: "center"
  },

  textoInfoDiaDeTroca: {
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#000000", // Black
    fontSize: 15,
    padding: 10
  },

  buttonHome: {
    backgroundColor: "#DC143C", // Crimson
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

  textoBotaoHome: {
    color: "#FFFFFF", // White
    fontSize: 18,
    fontFamily: "Candara Light",
    fontWeight: 'bold'
  },

  textoTituloHome: {
    position: 'absolute',
    top: 50,
    left: 100,
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },
})

export default App;