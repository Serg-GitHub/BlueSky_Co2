

function Food({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Food screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  <Stack.Screen
          name="Food"
          component={Food}        
        />

export default Food;