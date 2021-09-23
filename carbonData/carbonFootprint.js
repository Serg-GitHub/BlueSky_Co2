import React, { useState } from 'react';
import carbonInfo from 'carbonInfo';
import carbonList from 'carbonList';
import footprintCalculation from 'footprintCalculation';
import carComponent from '../components/transportComponents/carComponent';


const carbonFootprint = ({handleCalculation, addCarbonData}) => {
    const [car, setCar] = useState(0);
    const [train, setTrain] = useState(0);
    const [bus, setBus] = useState(0);
    const [bike, setBike] = useState(0);
   
    const handleCar = (event) => setCar(event.target.value);
    const handleTrain = (event) => setTrain(event.target.value);
    const handleBus = (event) => setBus(event.target.value);
    const handleBike = (event) => setBike(event.target.value);
    
    const handleSubmit = event => {
        event.preventDefault();
        const values = {
            car: parseInt(car),
            train: parseInt(train),
            bus:parseInt(bus),
            bike: parseInt(bike),
   
        }

        handleCalculation(values)
        setCar(0);
        setTrain(0);
        setBus(0);
        setBike(0);
     
    }
    return(
        <carComponent handleCar={handleCar}/>
    )
}
export default carbonFootprint;