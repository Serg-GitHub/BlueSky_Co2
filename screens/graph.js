import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";





const Graph = ({}) =>{
    const data = {
        labels: ["Car", "Bus", "Train", "Cycle"], // optional
        data: [0.8 , 0.6, 0.4, 0.2]
        
        // data:[]
      };




    // const carTotal = carNumberState;
    // const busTotal = busNumberState;
    // const trainTotal = trainTotal;
    // const bicycleTotal = bicycleTotal;

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2929",
        backgroundGradientFromOpacity: 0.0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 2) => `rgba(29, 256, 146, ${opacity})`,
        strokeWidth: 6, // optional, default 3
        barPercentage: 0.6,
        useShadowColorFromDataset: false // optional
    };

    return (
        <ProgressChart
            // carTotal={carTotal}
            // busTotal={busTotal}
            // trainTotal={trainTotal}
            // bicycleTotal={bicycleTotal}
            data={data} 
            width={290}
            height={200}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            />

    
    )

 
      
} 





export default Graph


