import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { Button, Divider, FormControl, Input } from 'native-base';

const LoginModal = ({ isVisible, handler }) => {

  return (
    <Modal
          isVisible={isVisible}
          style={{ margin: 0, justifyContent: 'flex-end' }}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.heading}>Verifying your OTP</Text>
            <Text style={styles.subHeading}>We’ve sent OTP to mobile number you provided. Please check your messages and enter the OTP.</Text>
            <FormControl>
              <FormControl.Label _text={{ color: '#303A47', fontSize: 'lg', bold: '700' }}>
                Mobile Number
              </FormControl.Label>
              <Input
                w={{ base: '100%', md: '5%' }}
                InputLeftElement={
                  <>
                    <Text style={styles.inputLeftText}>+91</Text>
                    <Divider orientation="vertical" height={6} ml={3} mr={2} borderColor="#979DB5" />
                  </>
                }
                placeholder="Enter your phone number"
              />
            </FormControl>

            <Button style={styles.button} onPress={handler}>
              <Text style={styles.buttonText}>Get OTP</Text>
            </Button>
            <View style={styles.footer}>
              <Text style={styles.footerText}>By continuing, you agree to our</Text>
              <Text style={styles.footerText}>
                <Text style={{ textDecorationLine: 'underline' }}>Terms of Service</Text>{'    '}
                <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>{'    '}
                <Text style={{ textDecorationLine: 'underline' }}>Content Privacy</Text>
              </Text>
            </View>
          </View>
        </Modal>
  )
}

export default LoginModal

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f0f1f5',
        padding: 12,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 16,
      },
      bottomSheet: {
        backgroundColor: 'white',
        padding: 25,
        paddingTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      inputLeftText: {
        color: '#979DB5',
        marginLeft: 15,
      },
      footer: {
        marginTop: 70,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#676B89',
      },
      heading: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 5,
      },
      subHeading: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 16,
        color: '#676B89',
      },
      footerText: {
        color: '#676B89',
      },
      buttonText: {
        color: '#979DB5',
        fontSize: 16,
      },
})