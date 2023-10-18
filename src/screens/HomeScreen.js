import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function HomeScreen( props ){
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate( "Settings" );
    }

    return(
        <SafeAreaView>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Text>H</Text>
            <Button onPress={ goToSettings } title="Settings"/>
        </SafeAreaView>
    )
}