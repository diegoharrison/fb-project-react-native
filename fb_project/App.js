import React, { Component } from 'react';
import {   
  View, 
  Text, 
  Alert,
  Image,
  TextInput,
  StyleSheet, 
  ScrollView, 
  TouchableOpacity
  } from 'react-native';

export default class App extends Component {

  clicou = () => {
    Alert.alert('Login', 'Você logou')
  }


  render() {  
    return (      
      <View style={styles.container}>

        <Image 
          source={require('./src/assets/logo-login.jpg')}
          style={styles.logo} 
        />

        <TextInput 
          style={styles.input}
          placeholder='Digite seu usuário'
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua senha'
        />  
          
        <TouchableOpacity 
          style={styles.botao}
          onPress={this.clicou}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>   


        {/* <View style={styles.postContainer}>
          <Text style={styles.postTitle}>React native</Text>
          <Text style={styles.postDescription}>React native descrição</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>React native</Text>
          <Text style={styles.postDescription}>React native descrição</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>React native</Text>
          <Text style={styles.postDescription}>React native descrição</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>React native</Text>
          <Text style={styles.postDescription}>React native descrição</Text>
        </View>      */}   
      </View>                     
    );
  } 
};

const styles = StyleSheet.create({  

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F4F',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#87CEEB',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
  

}); 




