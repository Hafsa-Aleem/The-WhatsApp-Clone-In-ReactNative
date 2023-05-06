import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './Screens/Navigation';

const App = ()=>{
  return <NavigationContainer>
    <Navigation/>
    </NavigationContainer>
}

export default App


