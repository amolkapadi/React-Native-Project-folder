import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/SettingsStyle'

export default function Settings() {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsText}>Settings</Text>
    </View>
  )
}