import React from 'react';
import {View, Button} from 'react-native';

const carbonInfo = ({co2, deleteCarbonData}) => {

    const total = () => {
        const carTotal = co2.car * 0.000168
        const trainTotal = co2.train * 0.000037
        const busTotal = co2.bus * 0.000103
        const bikeTotal = co2.bike * 0
        const meatTotal = co2.meat * 10

        return  carTotal + trainTotal + busTotal + bikeTotal + meatTotal
    }

    const handleDelete = () => {
        deleteCarbonData(co2._id)
    }
}
    return (
        <View>
        <Button onPress = {handleDelete}>DELETE ME!</Button>
       </View>
    )

    export default carbonInfo;