import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const EnabledButton = ({ text, handler }) => {
    return (
        <Button style={styles.button} onPress={handler}>
            <Text style={styles.buttonText}>{text}</Text>
        </Button>
    )
}

export default EnabledButton

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 24,
        borderRadius: 6,
        border: 1,
        backgroundColor: "#5F27FF",
},
    buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: "GTWBold"
},

})