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
          options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
          }}        
        />

        <Stack.Screen
         name= "Transport"
         component={Transport}
         options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />
   
        <Stack.Screen
        name= "Car"
        component={carComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />

        <Stack.Screen
        name= "Beef"
        component={beefComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />
        <Stack.Screen
        name= "Chicken"
        component={chickenComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />


  

        <Stack.Screen
        name= "Lamb"
        component={lambComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />

        <Stack.Screen
        name= "Pork"
        component={porkComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}
        />

        <Stack.Screen
        name= "Bus"
        component={busComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}

        />

        <Stack.Screen
        name= "Bicycle"
        component={bicycleComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}

        />

        <Stack.Screen
        name= "Train"
        component={trainComponent}
        options={{
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'green' },
        }}

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
 
