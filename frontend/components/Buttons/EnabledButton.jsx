import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'native-base';

const EnabledButton = ({ text, handler, imageSrc }) => {
  return (
    <Button style={styles.button} onPress={handler}>
      <View style={styles.container}>
        {imageSrc && <Image source={imageSrc} style={styles.buttonImage} />}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    borderRadius: 6,
    border: 1,
    backgroundColor: '#5F27FF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'GTWBold',
  },
  buttonImage: {
    marginRight: 6,
    width: 20,
    height: 20,
  },
});

export default EnabledButton;
