import React from 'react';

const carbonList = ({co2Data, deleteCarbonData}) => {
    const co2DataNodes = co2Data.map(co2 =>{
        return <CarbonInfo
        key = {co2._id}
        co2 = {co2}
        deleteCarbonData = {deleteCarbonData}
        />
    })
    
return (
    <>
       {co2DataNodes} 
    </>
        
        )
}
export default carbonList;