import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      color: "white",
      fontWeight: "blod",
      backgroundColor: "black",
      paddingHorizontal: 20,
      paddingVertical: 100,
    },
  });
  