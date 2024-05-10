import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/InitialScreen';

const InitialScreen = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate('MainNavigation');
  };

  return (
    <View style={styles.InitialScreenContainer}>
     
      <Text style={styles.InitialScreenText}>Welcome to App</Text>
     
     <TouchableOpacity style={styles.button} onPress={() => console.log("Login")}>
       <Text style={styles.buttonText}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.Skipbutton} onPress={() => console.log("Skip")}>
       <Text style={styles.skipbuttonText}>Skip</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.Skipbutton} onPress={goToHome}>
       <Text style={styles.skipbuttonText}>Go to Home</Text>
     </TouchableOpacity>
      
    </View>
  );
};

export default InitialScreen;
