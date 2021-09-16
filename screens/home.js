import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
    return (
      
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style= {styles.container}>

        <Text style={styles.text}>Hi User</Text>
        <Image
      source={{ uri: 'https://media0.giphy.com/media/Z8k6qo0AVIsPdROQNd/giphy.gif?cid=ecf05e47o5wz1yyzqvovp9xkj9abanqx5j4tfntl30tcums3&rid=giphy.gif&ct=g' }}
      style={{ width:360, height: 200 }}
      />
        
        <Button
        title="Add a Food Activity"
        color="#5cb85c"
        onPress={() => navigation.navigate('Food')}
        />
        <Button title="Add a transport Activity" 
        color="#27ae60"
        onPress={() => navigation.navigate('Transport')} />

      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001315',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  text: {
    fontSize: 40,
    color: 'white',
    
  },

});  

export default HomeScreen;