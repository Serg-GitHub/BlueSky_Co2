import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
// import Food from './food';

function HomeScreen({ route, navigation }) {
  const{carNumber} = route.params || {}
  return (
    
    
    <View style= {styles.container}>
    <Text style={styles.text}>Hi User</Text>
    <Text style={styles.text}>You Have Driven{carNumber}km's</Text>
    <Text style={styles.text}>You Have Driven  km's</Text>


     
      <Image
    source={{ uri: 'https://blueandgreentomorrow.com/wp-content/uploads/2019/09/shutterstock_1120037774-1.jpg' }}
    style={{ width:360, height: 250 }}
    />
      
      <Button
      title="Food"
      color="#5cb85c"
      onPress={() => navigation.navigate('Food')}
      />
      <Button title="Transport" 
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
  letterSpacing: 10,
  fontSize: 20,
  color: 'white',
  
  
},

});  

export default HomeScreen;