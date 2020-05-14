/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
  render () {
    return (
      <View style={{flex:1, justifyContent: 'center', backgroundColor:"#87CEFA"}}>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 45}}>Globo Pesquisas 
            
            </Text>
          </View>
          
          <View style={{margin:20}}>
            <Button
              title = 'Abrir tela de LOGIN'
              onPress = { () => this.props.navigation.navigate('Profile')}
            />
          </View>

      </View>
    );
  }
}

class ProfileScreen extends Component {
  render () {
    return (
      <View style={{flex:1, justifyContent: 'center', backgroundColor:"#87CEFA" }}>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>Usuário:
            Senha: </Text>
          </View>

          <View style={{margin:20}}>
            <Button
              title = 'Abrir GPS'
              onPress = { () => this.props.navigation.navigate('Details')}
            />
          </View>
          
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render () {
    return (
      <View style={{flex:1, justifyContent: 'center', backgroundColor:"#87CEFA"}}>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>MAPA GPS</Text>
          </View>

          <View style={{margin:20}}>
            <Button
              title = 'Topo'
              onPress = { () => this.props.navigation.navigate('Home')}
            />
          </View>

          <View style={{margin:20}}>
            <Button
              title = 'Re-Login'
              onPress = { () => this.props.navigation.goBack()}
            />
          </View>

          <View style={{margin:20}}>
            <Button
              title = 'Tela Inicial'
              onPress = { () => this.props.navigation.popToTop()}
            />
          </View>
          
      </View>
    );
  }
}

const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer (AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}