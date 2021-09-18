import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';



function Food({ navigation }) {
    return (
      
      <View style={styles.container}>
      

        <Text>Food Activity</Text>
        <Button title="beef" onPress={() => navigation.navigate('beef')} />
        <Button title="chicken" onPress={() => navigation.navigate('chicken')} />
        <Button title="lamb" onPress={() => navigation.navigate('lamb')} />
        <Button title="pork" onPress={() => navigation.navigate('pork')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
        
      </View>
    );

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




   } 
