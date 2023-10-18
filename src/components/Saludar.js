import React from "react";
import { Text } from "react-native";

export default function Saludar( props ) {
    const { name, firstname, lastname } = props;
    return <Text> Hola { firstname } { lastname }</Text>
}

Saludar.defaultProps = {
    firstname: 'Sergio', 
    lastname: 'López'
}