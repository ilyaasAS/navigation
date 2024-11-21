import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
    function handlePress(){
        navigation.navigate("Home");
    }

    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      color: "white",
      fontWeight: "blod",
      backgroundColor: "black",
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    button: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    }
  });
  