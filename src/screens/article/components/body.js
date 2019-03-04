import React from "react"
import { Text, StyleSheet } from "react-native"

export const Body = ({ text }) => <Text style={styles.text}>{text}</Text>

const styles = StyleSheet.create({
  text: {
    margin: 24,
    fontSize: 16,
    color: "grey"
  }
})
