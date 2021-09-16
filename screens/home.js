import * as React from 'react';
import { View, Button, Text } from 'react-native';

// import Food from './food';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Food"
          onPress={() => navigation.navigate('Food')}
        />
      </View>
    );
  }

  
 

  

export default HomeScreen;