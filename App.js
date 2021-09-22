import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/home';
import Food from './screens/food';
import { createStackNavigator } from '@react-navigation/stack';
import Transport from './screens/transport';
import carComponent from './components/transportComponents/carComponent';
import beefComponent from './components/foodComponents/beefComponent';
import chickenComponent from './components/foodComponents/chickenComponent';
import lambComponent from './components/foodComponents/lambComponent';
import porkComponent from './components/foodComponents/porkComponent';
import busComponent from './components/transportComponents/busComponent';
import bicycleComponent from './components/transportComponents/bicycleComponent';
import trainComponent from './components/transportComponents/trainComponent';
import Home from './screens/home';




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
          headerStyle: { backgroundColor: 'green' },
          }}
        />
        <Stack.Screen
          name="Food"
          component={Food}        
        />

        <Stack.Screen
        name= "Transport"
        component={Transport}
        />
   
        <Stack.Screen
        name= "Car"
        component={carComponent}
        />

        <Stack.Screen
        name= "beef"
        component={beefComponent}
        />

        <Stack.Screen
        name= "chicken"
        component={chickenComponent}
        />

        <Stack.Screen
        name= "lamb"
        component={lambComponent}
        />

        <Stack.Screen
        name= "pork"
        component={porkComponent}
        />

        <Stack.Screen
        name= "Bus"
        component={busComponent}

        />

        <Stack.Screen
        name= "Bicycle"
        component={bicycleComponent}

        />

        <Stack.Screen
        name= "Train"
        component={trainComponent}

        />

      </Stack.Navigator>
     </NavigationContainer>
     
  )
        }; 
         
       
    
        


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 50,
//   }  
// });  
 
