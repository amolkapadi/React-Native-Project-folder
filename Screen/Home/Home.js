import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/HomeStyle'

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Home</Text>
    </View>
  )
}