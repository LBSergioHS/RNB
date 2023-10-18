import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

export default function Saludar( props ) {
    const { name, firstname, lastname } = props;
    return <Text> Hola { firstname } { lastname }</Text>
}

Saludar.defaultProps = {
    firstname: 'Sergio', 
    lastname: 'López'
}

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired, 
    lastname: PropTypes.string.isRequired
}