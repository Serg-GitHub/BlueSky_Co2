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
             width:400,
             height:150,
             uri:"https://codeclan.com/wp-content/uploads/2019/01/CodeClan-Careers-01.png",}}/>
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
