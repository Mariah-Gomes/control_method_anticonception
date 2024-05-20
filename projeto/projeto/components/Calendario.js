import React from "react";
import { Text, View, StyleSheet} from 'react-native';
import { Calendar } from 'react-native-calendars';

class Calendario extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: new Date(),
    }
  }
  render(){
    return(
    <View style={estilos.container}>
      <Calendar style={estilos.calendar}  
      theme={{
          todayTextColor: '#DC143C',
          textMonthFontWeight: 'bold',
          arrowColor: '#DC143C',
        }}/>
      <Text></Text>
    </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    /*display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',*/
    padding: 20,
    backgroundColor: '#FAEBD7' //antiqueWhite
  },

  calendar: {
    position: 'absolute',
    top: 30,
    left: 16,
    width: '90%', // Defina a largura do calendário
    borderWidth: 1,
    borderColor: '#DC143C', // Cor da borda
    borderRadius: 10, // Raio da borda
  },
})

export default Calendario;