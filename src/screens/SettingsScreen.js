import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function SettingsScreen( props ){
    const { navigation } = props;

    const goToPage = ( pageName ) => {
        navigation.navigate(pageName);
    }

    return(
        <SafeAreaView>
            <Text>S</Text>
            <Text>S</Text>
            <Text>S</Text>
            <Text>S</Text>
            <Text>S</Text>
            <Text>S</Text>
            <Text>S</Text>
            <Button onPress={ ()=>goToPage("Home") } title="Home"/>
        </SafeAreaView>
    )
}