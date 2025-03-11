/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import colors from './assets/colors/colors';
import {Ionicons, FontAwesome6} from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function App() {

const [loaded, error] = useFonts({
   'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
   'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
   'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
   'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
   console.log('didnt work');
 }

  return (
    <View style={styles.container}>
        <FontAwesome6 name="user" size={32} color="green"/>
        <Ionicons name="person-circle" size={32} color="green" />
        <Text style={styles.textt}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
    fontFamily: 'Montserrat-Bold',
    color: colors.price,
  }
});*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Details from "./components/Details";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//"react-native-screens": "3.31.1"
//    "@react-navigation/native-stack": "^7.0.0",
