import React from "react";
import { Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const Graph = ({graphData}) =>{
    const data = {
        labels: ["Car", "Bus", "Train", "Cycle", "Beef", "Chicken", "Pork", "Lamb"], // optional
        data: graphData,
        colors: ["#ff0000", "#ffa500", "#0000ff", "#5cb85c", "#FFED33", "#A8FF33", "#E633FF" , "#33FFF9"], 
        
        
        
      };

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2929",
        backgroundGradientFromOpacity: 0.0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 6, // optional, default 3
        barPercentage: 0.1,
        useShadowColorFromDataset: false // optional
    };

    return (
        <ProgressChart
            data={data} 
            width={310}
            height={200}
            strokeWidth={8}
            withCustomBarColorFromData={true}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            />
    )
} 
export default Graph 


