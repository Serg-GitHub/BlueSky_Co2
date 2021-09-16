import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text>Hi User!,</Text>
        <Image
         
             source={{
             width:200,
             height:300,
             uri:"https://picsum.photos/200/300",}}/>
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
      backgroundColor: 'hotpink',
      alignItems: 'center',
      justifyContent: 'center',

      
    },
    text: {
      fontSize: 50,
    }  
  });
export default HomeScreen;