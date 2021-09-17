import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

type FormData = {
    
}



const carbonFormCar = ({handleCalculation,addCarbonData}) => {
    const [car, setCar] = useState(0)
   
    const handleCar = (event) => setCar(event.target.value);

   const handleSubmit = event => {
       event.preventDefault();
       const values = {
           car: parseInt(car)
       }


       handleCalculation(values)
       setCar(0);
   }

   return(
       <form className= "form-style" onSubmit = {handleSubmit} >
       <view>
           <label htmlFor = "car">How many kilometers do you drive in a week?</label>
           {/* <input type = "number" id = */}
           </view>
       </form>

    
   )
   



}
export default carbonFormCar