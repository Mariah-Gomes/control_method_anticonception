import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Vibration} from 'react-native';
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

const handleVibration = () => {
    Vibration.vibrate(1000); // Vibra por 100 milissegundos
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
    handleVibration();
    this.props.navigation.navigate("Entrar");
  }
}

class Entrar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dia: undefined,
      periodo: undefined,
      dataAtual: new Date(),
      resultado: undefined,
      resultado2: undefined,
      resultado3: undefined,
      resultadoSP: undefined,
      options : { weekday: "long" },
    }
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
      <TouchableOpacity style={estilos.buttonHome} onPress={()=>this.cadastrar()}>
        <Text style={estilos.textoBotaoHome}>{"Home"}</Text>
      </TouchableOpacity>
    </View>
    )
  }

  async cadastrar(){
    try{
      const diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      const indexAtual = diaSemana.indexOf(this.state.dia);
      const dataAtual = new Date();

      /*SEGUNDA*/ 

      if(this.state.dia == 'Segunda'){
        if(dataAtual.getDay() == 1){
          const proximaData = new Date(dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
          dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            /*
            const proximaData2 = new Date(dataAtual.getMonth(), resultado.getDate() + 7);
            const proximaData3 = new Date(dataAtual.getMonth(), proximaData2.getDate() + 7);
            const proximaDataSP = new Date(dataAtual.getMonth(), proximaData3.getDate() + 7);
            this.setState({resultado2: proximaData2});
            this.setState({resultado3: proximaData3});
            this.setState({resultadoSP: proximaDataSP});
            */
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
            this.props.navigation.navigate("Home2", {resultado2: this.state.resultado2});
            this.props.navigation.navigate("Home2", {resultado3: this.state.resultado3});
            this.props.navigation.navigate("Home2", {resultadoSP: this.state.resultadoSP});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }
      
      /*TERÇA*/
      
      else if(this.state.dia == 'Terça'){
        if(dataAtual.getDay() == 2){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }
      
      /*QUARTA*/
      else if(this.state.dia == 'Quarta'){
        if(dataAtual.getDay() == 3){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }

      /*QUINTA*/

      else if(this.state.dia == 'Quinta'){
        if(dataAtual.getDay() == 2){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }

      /*SEXTA*/

      else if(this.state.dia == 'Sexta'){
        if(dataAtual.getDay() == 5){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }

      /*SÁBADO*/

      else if(this.state.dia == 'Sábado'){
        if(dataAtual.getDay() == 6){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }
      }

      /*DOMINGO*/

      else if(this.state.dia == 'Domingo'){
        if(dataAtual.getDay() == 2){
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + 7);
          this.setState({resultado: proximaData});
        }
        else{
          const diasParaProximaData = (dataAtual.getDate() + 7 - indexAtual) % 7;
          const proximaData = new Date(dataAtual.getFullYear(), 
        dataAtual.getMonth(), dataAtual.getDate() + diasParaProximaData);
          this.setState({resultado: proximaData});
        }
          if(this.state.periodo == 'Primeira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Segunda'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Terceira'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home2", {resultado: this.state.resultado});
          }

          else if(this.state.periodo == 'Semana de pausa'){
            await AsyncStorage.setItem('dia', this.state.dia);
            await AsyncStorage.setItem('periodo', this.state.periodo);
            this.props.navigation.navigate("Home");
          }
      }
    }
    catch(erro){
      console.log(erro);
    }
  }
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      day: "",
      period: "",
    };
  }
  
  async ler(){
    try{
      const valueDay = await AsyncStorage.getItem('dia');
      const valuePeriod = await AsyncStorage.getItem('periodo');
      this.setState({ day: valueDay })
      this.setState({ period: valuePeriod })
    }catch(erro){
      console.log(erro);
    }
  }
    
  componentDidMount(){
    this.ler();
  }
  
  render(){
    return(
      <View style={estilos.container}>
      <Text style={estilos.textoTituloHome}>{"Ciclo atual:"}</Text>
      <Spacer size={20} />
      <Text style={estilos.variavelDia}>{"Seu próximo dia de troca é: " + this.props.route.params.resultado}</Text>
      <Spacer size={20} />
      <Text style={estilos.variavelPeriodo}>{"Você está na troca: " + this.state.period}</Text>
      <Spacer size={20} />
      <Text>{"Mostrar os dias de troca do ciclo da mulher - Marcar em qual adesivo ela está"}</Text> 
    </View>
    )
  }
}

class Nav2 extends React.Component {
  constructor(props){
    super(props)
  }

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
       initialParams={{ resultado: this.props.route.params.resultado}}
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

class App extends React.Component {
  render() {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="Entrar" component={Entrar} options={{headerShown: false}}/>
        <Stack.Screen name="Home2" component={Nav2} options={{headerShown: false}}/>
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
    textAlign: 'center',
    fontFamily: "Candara Light",
    color: "#DC143C", // Crimson
    fontSize: 25
  },

  variavelDia: {
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#000000", // Black
    fontSize: 15,
  },

  variavelPeriodo: {
    textAlign: 'center',
    fontFamily: "Trirong",
    color: "#000000", // Black
    fontSize: 15,
  },

})

export default App;
