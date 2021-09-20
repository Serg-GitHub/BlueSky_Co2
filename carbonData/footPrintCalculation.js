import React from 'react';

function footprintCalculation() {

        const [allData, setAllData] = useState([]);
  
    useEffect(() => {
      carbonServices.getCarbonData()
        .then(Carbon => setAllData(Carbon));
    }, []);
  
    const addCarbonData = () => {
      carbonServices.addCarbonData(values)
      .then(savedCarbon => {
            setAllData([...allData,savedCarbon])
      }
        
        )
    }
  
    const deleteCarbonData = (id) => {
      carbonServices.deleteCarbonData(id)
      setAllData(allData.filter(data => data._id !== id))
    }
  
   
    const [calculation, setCalculation] = useState(0);
    const [values, setValues] = useState(0);
  
    const handleCalculation = (values) => {
  
      const carTotal = values.car * 0.000168
      const trainTotal = values.train * 0.000037
      const busTotal = values.bus * 0.000103
      const bikeTotal = values.bike * 0
     
  
      const total = carTotal + trainTotal + busTotal + bikeTotal 
      setCalculation(total)
      setValues(values)
  
    }
    return (
      <></>
        
    )
      
      
   
  }
  
  export default footprintCalculation; 