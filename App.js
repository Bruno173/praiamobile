import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Praias lindas do Brasil</Text>
      <Text style={estilo.frase}> Quem ta triste não ta mais </Text>
      
      <ScrollView style={estilo.fotos}>
      <Image style={estilo.img} source={require("./assets/areia.jpg")} />
      <Text style={estilo.legenda}> Praia com areia </Text>
      <Image style={estilo.img} source={require("./assets/praia.jpg")} />
      <Text style={estilo.legenda}> Areia com praia </Text>
      <Image style={estilo.img} source={require("./assets/mar.jpg")} />
      <Text style={estilo.legenda}> Praia com mar </Text>
      <Image style={estilo.img} source={require("./assets/mareareia.jpg")} />
      <Text style={estilo.legenda}> Praia com mar e areia</Text>
      </ScrollView>
    
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#87CEFA" ,
    alignItems: "center",
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop:45,
    marginBottom: 20,
  },
  frase:{
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  img:{
    width: 300,
    height: 200,
    alignItems: 'center',
    borderRadius: 15,
  },
  legenda:{
    textAlign: 'center',
  },
  fotos:{
    alignItems: 'center',
  },
});