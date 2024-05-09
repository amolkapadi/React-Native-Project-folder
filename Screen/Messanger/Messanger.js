import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/MessangerStyle'
export default function Messanger() {
  return (
    <View style={styles.messangerContainer}>
      <Text style={styles.messangerText}>Messanger</Text>
    </View>
  )
}