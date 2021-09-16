import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
    return (
      
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style= {styles.container}>

        <Text>Hi User!,</Text>
        <Image
      source={{ uri: 'https://miro.medium.com/max/1024/1*FBRtL-zgF37T1LChAyCXBA.jpeg' }}
      style={{ width:360, height: 200 }}
      />
        
        <Button
          title="Add a Food Activity"
          onPress={() => navigation.navigate('Food')}
        />
        <Button title="Add a transport Activity" onPress={() => navigation.navigate('Transport')} />

      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  }  
});  

export default HomeScreen;