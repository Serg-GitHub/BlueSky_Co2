import * as React from 'react';
import { View, Button, Text, } from 'react-native';
import styles from "./styles"
import Graph from './graph';
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
  const handleSignOut = ()=>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace('Login Screen')
    })
    .catch(error=> alert(error.message))
  }

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
  
  
  const carTotal = carNumberState * 0.0016
  const busTotal = busNumberState * 0.0010
  const trainTotal = trainNumberState * 0.0037
  const bicycleTotal = bicycleNumberState * 0.0016
  const beefTotal = beefNumberState * 0.0364
  const chickenTotal = chickenNumberState * 0.0365
  const porkTotal = porkNumberState * 0.0577
  const lambTotal = lambNumberState * 0.0109
  const handleCalculation =  (carTotal + busTotal + bicycleTotal + trainTotal + beefTotal + chickenTotal + porkTotal + lambTotal).toFixed(2);

  return (
    
    <View style= {styles.container}>
    <Text style={styles.text}>user: {auth.currentUser?.email}</Text>
    <Text style={styles.header}>BlueSky Co2</Text>
    <Text style={styles.text}>Hello, your carbon footprint this week is</Text>

      <View style= {styles.graphView}>
      <Graph style ={styles.graph} graphData = {[carTotal, busTotal, bicycleTotal, trainTotal, beefTotal, chickenTotal, porkTotal, lambTotal]}></Graph>
      </View>
      <Text style={styles.text}>Total: {handleCalculation} kg's of Co2</Text>
      <View style={styles.buttonView}>
      <Button style={styles.button}
      title="Food"
      color="#5cb85c"
      onPress={() => navigation.navigate('Food')}
      />
      </View>
      <View style={styles.buttonView}>
      <Button style={styles.button}
      title="Transport" 
      color="#27ae60"
      onPress={() => navigation.navigate('Transport')} />
      <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}>
      <Text style={styles.textLog}>Sign out</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
}
export default HomeScreen; 