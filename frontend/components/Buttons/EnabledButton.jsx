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
        marginTop: 16,
        borderRadius: 6,
        border: 1,
        background: "linear - gradient(180deg, rgba(255, 255, 255, 0.12) 0 %, rgba(255, 255, 255, 0.00) 100 %), #5F27FF",
        /* Form/Button/Primary Normal */
        boxShadow: "0px 0px 0px 1px #4F47EB, 0px 1px 2px 0px rgba(26, 19, 161, 0.50)"
},
    buttonText: {
    color: '#FFF',
    fontSize: 16,
},

})