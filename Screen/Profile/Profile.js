import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProfileStyle'
export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileText}>Profile</Text>
    </View>
  )
}