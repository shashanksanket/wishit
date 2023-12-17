import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const DisabledButton = ({ text }) => {
  return (
    <Button style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  )
}

export default DisabledButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f1f5',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#979DB5',
    fontSize: 16,
    fontFamily: 'GTWRegular'
  },

})