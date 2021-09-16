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
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello Craig!, how are you?</Text>
      <StatusBar style="auto" />
      <Image
         
             source={{
             width:200,
             height:300,
             uri:"https://picsum.photos/200/300",}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50, 
  }



});  
=======

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
>>>>>>> simon



