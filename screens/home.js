import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';


function HomeScreen({ route, navigation }) {
  const [carNumberState, setCarNumberState] = React.useState(0);
  const [busNumberState, setBusNumberState] = React.useState(0);
  const [trainNumberState, setTrainNumberState] = React.useState(0);
  const [bicycleNumberState, setBicycleNumberState] = React.useState(0);


  const{carNumber} = route.params || {}
  if (carNumber && carNumber !== carNumberState) setCarNumberState(carNumber)
  const{busNumber} = route.params || {}
  if (busNumber && busNumber !== busNumberState) setBusNumberState(busNumber)
  const{trainNumber} = route.params || {}
  if (trainNumber && trainNumber !== trainNumberState) setTrainNumberState(trainNumber)
  const{bicycleNumber} = route.params || {}
  if (bicycleNumber && bicycleNumber !== bicycleNumberState) setBicycleNumberState(bicycleNumber)
  // const{beefNumber} = route.params || {}
  // if (beefNumber && beefNumber !== beefNumberState) setBeefNumberState(beefNumber)
  // const{chickenNumber} = route.params || {}
  // if (chickenNumber && chickenNumber !== chickenNumberState) setChickenNumberState(chickenNumber)
  // const{porkNumber} = route.params || {}
  // if (porkNumber && porkNumber !== porkNumberState) setPorkNumberState(porkNumber)
  // const{lambNumber} = route.params || {}
  // if (lambNumber && lambNumber !== lambNumberState) setLambNumberState(lambNumber)
  
  const co2CarTotal = () => {
    const carTotal = carNumberState * 0.000168
    return carTotal
  }
  const co2BusTotal = () => {
    const busTotal = busNumberState * 0.000103
    return busTotal
  }
  const co2TrainTotal = () => {
    const trainTotal = trainNumberState * 0.000037
    return trainTotal
  }
  const co2BicycleTotal = () => {
    const bicycleTotal = bicycleNumberState * 0.000016
    return bicycleTotal
  }
  // const co2TotalCalculation = () => {
  //    const co2Total = bicycleTotal + trainTotal + busTotal + carTotal
  //   return co2Total
  // }


  return (
    
    
    <View style= {styles.container}>
    <Text style={styles.text}>Hi User</Text>
    <Text style={styles.text}>{co2CarTotal()}car</Text>
    <Text style={styles.text}>{co2BusTotal()}bus</Text>
    <Text style={styles.text}>{co2TrainTotal()}train</Text>
    <Text style={styles.text}>{co2BicycleTotal()}bicycle</Text>

    {/* <Text style={styles.text}>{co2TotalCalculation()}total</Text> */}

  



    {/* <Text style={styles.text}>{co2Total()}km's travelled</Text> */} 
    {/* <Text style={styles.text}>{beefNumber}Kg,s eaten(beef)</Text>
    <Text style={styles.text}>You Have eaten {chickenNumber} kilos of chicken</Text>
    <Text style={styles.text}>You Have eaten {porkNumber} kilos of pork</Text>
    <Text style={styles.text}>You Have eaten {lambNumber} kilos of lamb</Text> */}


     
      <Image
    source={{ uri: 'https://blueandgreentomorrow.com/wp-content/uploads/2019/09/shutterstock_1120037774-1.jpg' }}
    style={{ width:360, height: 250 }}
    />
      
      <Button
      title="Food"
      color="#5cb85c"
      onPress={() => navigation.navigate('Food')}
      />
      <Button title="Transport" 
      color="#27ae60"
      onPress={() => navigation.navigate('Transport')} />

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#001315',
  alignItems: 'center',
  justifyContent: 'center',
 
  
},
text: {
  letterSpacing: 10,
  fontSize: 15,
  color: 'white',
  
  
},

});  

export default HomeScreen;