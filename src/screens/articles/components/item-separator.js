import React from "react"
import { View, StyleSheet } from "react-native"

export const ItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "silver"
  }
})
