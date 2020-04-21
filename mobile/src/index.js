import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'

export default function App () {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159C1' />
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#7159C1',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
