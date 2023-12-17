import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base'
import PropTypes from 'prop-types';

const EnabledButton = ({ text, handler, imageSrc }) => {
    return (
        <Button style={styles.button} onPress={handler}>
            {imageSrc && (
                <Image source={imageSrc} style={styles.buttonImage} />
            )}
            <Text style={styles.buttonText}>{text}</Text>
        </Button>
    )
}

EnabledButton.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    imageSrc: PropTypes.any,
  };

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
        flexDirection: "row"
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: "GTWBold"
    },

    buttonImage: {
        marginRight: 6,
        width: 20,
        height: 20
    }

})