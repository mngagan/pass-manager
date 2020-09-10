import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'
import utils from './utils/asyncStorage'

class AsyncStorageExample extends Component {
   state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   
   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
               {this.state.name}
            </Text>
         </View>
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 50
    },
    textInput: {
       margin: 5,
       height: 100,
       borderWidth: 1,
       width : 1000,
       backgroundColor: '#7685ed'
    }
 })