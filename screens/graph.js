import React from "react";
import { Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const Graph = ({graphData}) =>{
    const data = {
        labels: ["Car", "Bus", "Train", "Cycle", "Beef", "Chicken", "Pork", "Lamb"], // optional
        data: graphData
        
        
      };

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2929",
        backgroundGradientFromOpacity: 0.0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
        strokeWidth: 6, // optional, default 3
        barPercentage: 0.6,
        useShadowColorFromDataset: false // optional
    };

    return (
        <ProgressChart
            data={data} 
            width={310}
            height={200}
            strokeWidth={8}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            />
    )
} 
export default Graph


