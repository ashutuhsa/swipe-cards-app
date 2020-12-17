import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Deck from './src/Deck'
import CustomCard from './src/CustomCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const DATA = [
  { id: 1, title: 'Card #1', uri: 'https://robohash.org/AY1.png?set=set2' },
  { id: 2, title: 'Card #2', uri: 'https://robohash.org/AY2.png?set=set2' },
  { id: 3, title: 'Card #3', uri: 'https://robohash.org/AY3.png?set=set2' },
  { id: 4, title: 'Card #4', uri: 'https://robohash.org/AY4.png?set=set2' },
  { id: 5, title: 'Card #5', uri: 'https://robohash.org/AY5.png?set=set2' },
  { id: 6, title: 'Card #6', uri: 'https://robohash.org/AY6.png?set=set2' },
  { id: 7, title: 'Card #7', uri: 'https://robohash.org/AY7.png?set=set2' },
  { id: 8, title: 'Card #8', uri: 'https://robohash.org/AY8.png?set=set2' },
  { id: 9, title: 'Card #9', uri: 'https://robohash.org/AY9.png?set=set2' },
  { id: 10, title: 'Card #10', uri: 'https://robohash.org/AY10.png?set=set2' },
  { id: 11, title: 'Card #11', uri: 'https://robohash.org/AY11.png?set=set2' },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Swipe App</Text>
      <Deck
        data={DATA}
        CustomCard={CustomCard}
      />
      <StatusBar />
    </View>
  )
}
