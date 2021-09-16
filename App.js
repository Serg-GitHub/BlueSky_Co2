import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/home';
import Food from './screens/food';
import { createStackNavigator } from '@react-navigation/stack';
import Transport from './screens/transport';
// import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#0f270e' },
          }}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#0f270e' },
          }}        
        />

        <Stack.Screen
          name= "Transport"
          component={Transport}
          options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#0f270e' },
          }}
        />
      </Stack.Navigator>
     </NavigationContainer>
     
  )
        };
    
        



