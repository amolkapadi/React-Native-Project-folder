import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const styles = StyleSheet.create({
  InitialScreenContainer: {
    flex: 1,
    backgroundColor: colors.bglightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InitialScreenText: {
    color: 'white',
    fontSize: 24, // Example font size
    fontWeight: 'bold', // Bold font weight
    marginBottom: 20, // Add margin for spacing
  },
  button: {
    width: '90%',
    backgroundColor: 'red', // Example button color
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 10, // Add margin between buttons
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
    
  },
  Skipbutton: {
    width: '90%',
    backgroundColor: 'white', // Example button color
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 10, // Add margin between buttons
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  skipbuttonText:{
    color:"black"
  },
  buttonText: {
    color: 'white', // Example button text color
    fontWeight: 'bold', // Example button text font weight
  },
});
