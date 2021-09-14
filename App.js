import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Image
         
             source={{
             width:200,
             height:300,
             uri:"https://i.picsum.photos/id/515/200/300.jpg?hmac=vFZxSlHgQLs0ROgtBCrqBiYOVaKSOrWGCyHjQclmjh8",}}/>
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
});
