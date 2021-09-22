import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import Graph from './graph';


function HomeScreen({ route, navigation }) {
  const [carNumberState, setCarNumberState] = React.useState(0);
  const [busNumberState, setBusNumberState] = React.useState(0);
  const [trainNumberState, setTrainNumberState] = React.useState(0);
  const [bicycleNumberState, setBicycleNumberState] = React.useState(0);
  const [beefNumberState, setBeefNumberState] = React.useState(0);
  const [chickenNumberState, setChickenNumberState] = React.useState(0);
  const [porkNumberState, setPorkNumberState] = React.useState(0);
  const [lambNumberState, setLambNumberState] = React.useState(0);
  const [calculationState, setCalculationState] = React.useState(0);



  const{carNumber} = route.params || {}
  if (carNumber && carNumber !== carNumberState) setCarNumberState(carNumber)
  const{busNumber} = route.params || {}
  if (busNumber && busNumber !== busNumberState) setBusNumberState(busNumber)
  const{trainNumber} = route.params || {}
  if (trainNumber && trainNumber !== trainNumberState) setTrainNumberState(trainNumber)
  const{bicycleNumber} = route.params || {}
  if (bicycleNumber && bicycleNumber !== bicycleNumberState) setBicycleNumberState(bicycleNumber)
  const{beefNumber} = route.params || {}
  if (beefNumber && beefNumber !== beefNumberState) setBeefNumberState(beefNumber)
  const{chickenNumber} = route.params || {}
  if (chickenNumber && chickenNumber !== chickenNumberState) setChickenNumberState(chickenNumber)
  const{porkNumber} = route.params || {}
  if (porkNumber && porkNumber !== porkNumberState) setPorkNumberState(porkNumber)
  const{lambNumber} = route.params || {}
  if (lambNumber && lambNumber !== lambNumberState) setLambNumberState(lambNumber)
  const{calculation} = route.params || {}
  if (calculation && calculation !== calculationState) setCalculationState(calculation)
  
  
    const carTotal = carNumberState * 0.000168
    
  
  
    const busTotal = busNumberState * 0.000103
    


    const trainTotal = trainNumberState * 0.000037

  
  
    const bicycleTotal = bicycleNumberState * 0.000016
    

 
    const beefTotal = beefNumberState * 36.4
 
  

    const chickenTotal = chickenNumberState * 36.5
  
  
 
    const porkTotal = porkNumberState * 57.7
   
  
  
    const lambTotal = lambNumberState * 10.9
    
  
  const handleCalculation =  carTotal + busTotal + bicycleTotal + trainTotal;

   
  
   

  return (
    
    
    <View style= {styles.container}>
    <Text style={styles.text}>Hi User</Text>
    <Text style={styles.text}>{carTotal}car</Text>
    <Text style={styles.text}>{busTotal}bus</Text>
    <Text style={styles.text}>{trainTotal}train</Text>
    <Text style={styles.text}>{bicycleTotal}bicycle</Text>
    <Text style={styles.text}>{beefTotal}beef</Text>
    <Text style={styles.text}>{chickenTotal}chicken</Text>
    <Text style={styles.text}>{porkTotal}pork</Text>
    <Text style={styles.text}>{lambTotal}lamb</Text>

    <Text style={styles.text}>{handleCalculation}total</Text>
    

    {/* <Text style={styles.text}>{co2TotalCalculation()}total</Text> */}

      <Graph></Graph>

      
 
    
      
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

  fontSize: 15,
  color: 'white',
  
  
},

});  

export default HomeScreen; 