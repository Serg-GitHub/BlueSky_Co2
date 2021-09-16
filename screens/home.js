import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
    return (
      
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style= {styles.container}>

        <Text style={styles.white}>Hi User!</Text>
        <Image
      source={{ uri: 'https://miro.medium.com/max/1024/1*FBRtL-zgF37T1LChAyCXBA.jpeg' }}
      style={{ width:360, height: 200 }}
      />
        
        <Button
        title="Add a Food Activity"
        color="#ff8c00"
        onPress={() => navigation.navigate('Food')}
        />
        <Button title="Add a transport Activity" 
        color="#ffcc00"
        onPress={() => navigation.navigate('Transport')} />

      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f270e',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  white: {
    fontSize: 40,
    color: 'white',
    
  },

});  

export default HomeScreen;