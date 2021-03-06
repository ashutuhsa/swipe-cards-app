import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ball from './src/Ball'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Swipe App</Text>
      <Ball />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
