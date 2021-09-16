import * as React from 'react';
import { View, Button, Text } from 'react-native';

function Food({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Food screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  

export default Food;