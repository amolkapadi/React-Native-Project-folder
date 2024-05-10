import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/HomeStyle'

export default function Home({ navigation }) {
  const goToInitialScreen = () => {
    navigation.navigate('InitialScreen');
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Home</Text>
      <TouchableOpacity onPress={goToInitialScreen}>
        <Text style={{color:'white', marginTop:30}}>Go to Initial Screen </Text>
      </TouchableOpacity>
    </View>
  )
}
