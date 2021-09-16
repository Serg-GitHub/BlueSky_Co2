import * as React from 'react';
import { View, Button, Text } from 'react-native';
// import Food from './food';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hi User!,</Text>
        <Button
          title="Add a Food Activity"
          onPress={() => navigation.navigate('Food')}
        />
        <Button title="Add a transport Activity" onPress={() => navigation.navigate('Transport')} />

      </View>
    );
  }
export default HomeScreen;