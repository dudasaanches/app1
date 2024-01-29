import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [vezes,setVezes] = useState(0)

  function Clicou (){
    setVezes(vezes+1)
  }
  function ClicouMenos (){
    setVezes(vezes-1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello Word!</Text>
      <Text style={styles.text2}>Você clicou {vezes}</Text>
      <Button title={"Clique Aqui"} onPress={Clicou}></Button>
      <Button color={'red'} title={"Diminuir"} onPress={ClicouMenos}></Button>
      <StatusBar style="light" backgroundColor={"blue"} translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97e8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontStyle: "italic",
    fontSize: 50,
    color: 'blue'
  },
  text2:{
    fontSize: 20
  }

});