import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
  return (
    
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style= {styles.container}>

      <Text style={styles.text}>Hi User</Text>
      <Image
    source={{ uri: 'https://blueandgreentomorrow.com/wp-content/uploads/2019/09/shutterstock_1120037774-1.jpg' }}
    style={{ width:360, height: 250 }}
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