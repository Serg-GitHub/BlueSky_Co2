import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Meat from '../components/foodComponents/meats';



function Food({ navigation }) {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      {/* </View> */}

        <Text>Food Activity</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Add a transport Activity" onPress={() => navigation.navigate('Transport')} />
        {/* <Meat/> */}

      </View>
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
   



  

export default Food;