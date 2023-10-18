import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Saludar name='Sergio López'/> */}
      <Saludar firstname='Sergio' lastname='López'/>
      <LoginForm/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
