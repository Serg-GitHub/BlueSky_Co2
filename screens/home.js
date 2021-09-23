import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import styles from "./styles"
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
  
  
  const carTotal = carNumberState * 0.0168
  const busTotal = busNumberState * 0.0103
  const trainTotal = trainNumberState * 0.0037
  const bicycleTotal = bicycleNumberState * 0.0016
  const beefTotal = beefNumberState * 0.0364
  const chickenTotal = chickenNumberState * 0.0365
  const porkTotal = porkNumberState * 0.0577
  const lambTotal = lambNumberState * 0.109
  const handleCalculation =  (carTotal + busTotal + bicycleTotal + trainTotal + beefTotal + chickenTotal + porkTotal + lambTotal).toFixed(2);

  return (
    
    
    
    <View style= {styles.container}>
    <Text style={styles.header}>BlueSky Co2</Text>
    <Text style={styles.text}>Hello, your carbon footprint for the week is</Text>
    {/* <Text style={styles.text}>Hi User</Text>*/}
    {/* <Text style={styles.text}>{carTotal}car</Text> */}

    {/* <Text style={styles.text}>{busTotal}bus</Text>
    <Text style={styles.text}>{trainTotal}train</Text>
    <Text style={styles.text}>{bicycleTotal}bicycle</Text>
    <Text style={styles.text}>{beefTotal}beef</Text>
    <Text style={styles.text}>{chickenTotal}chicken</Text>
    <Text style={styles.text}>{porkTotal}pork</Text>
    <Text style={styles.text}>{lambTotal}lamb</Text> */}

    {/* <Text style={styles.text}>{handleCalculation}Total: </Text>  */}
 
    
    {/* <Image
    source={{ uri: 'https://blueandgreentomorrow.com/wp-content/uploads/2019/09/shutterstock_1120037774-1.jpg' }}
    style={{ width:360, height: 250 }}
    /> */}
      <View style= {styles.graphView}>
      <Graph style ={styles.graph} graphData = {[carTotal, busTotal, bicycleTotal, trainTotal, beefTotal, chickenTotal, porkTotal, lambTotal]}></Graph>
      </View>
      <Text style={styles.text}>Total: {handleCalculation} grams</Text>
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
      </View>
      

    </View>
  );
}

export default HomeScreen; 