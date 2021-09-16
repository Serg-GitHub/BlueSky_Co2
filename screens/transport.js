import * as React from 'react';
import { View, Button, Text } from 'react-native';

function Transport({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Transport screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Calculate"/>
      </View>
    );
  }
export default Transport;