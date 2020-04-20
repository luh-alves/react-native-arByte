import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

function Render(){
  const [textoDigitado, setTextoDigitado] = useState('');
  const [textoPostado, setTextoPostado] = useState('')
  
  return(
  <View style={styles.container}>
      <Text style={styles.titulo} >Frase?</Text>
      <TextInput style ={{
        height: 80, 
        width: 400,
        borderColor: 'black', 
        borderWidth: 4, 
        margin: 5}}
        placeholder="Digite a letra de uma musica......."
        multiline={true}
        onChangeText={texto => setTextoDigitado(texto)}
        maxLength={140}
        value = {textoDigitado}
        />
      <Button
      onPress={() => {
        if (textoDigitado.length < 10){
          Alert.alert("Caracteres minimos 10")
        }else{
        setTextoPostado(textoDigitado),
        Alert.alert(`\u{1F606}  \u{1f607}  \u{1f3c1}  \u{1f609}`)
        setTextoDigitado('')
        }
      }}
      title="Postar" color="#1e90ff" />
    
      <Text style={styles.titulo}>Mural: </Text>
      <Text style={styles.fonteBase}>{textoPostado}</Text>
    </View>

  )
}



export default function App() {
  return(
    <Render/>
  )
}

const styles = StyleSheet.create({
  fonteBase: {
    fontFamily: 'Roboto',
    fontSize:  22
},
titulo: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold'

},
negrito: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold'

}
});