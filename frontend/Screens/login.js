import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button, FormControl, Icon, Divider } from 'native-base';
import { MaterialIcons } from 'react-native-vector-icons';
import Modal from 'react-native-modal';

export default function Login({ navigation }) {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(true);
  const [username, setUsername] = useState('');

  const toggleBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const handleLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>

        <Modal
          isVisible={isBottomSheetVisible}
          onBackdropPress={toggleBottomSheet}
          style={{ margin: 0, justifyContent: 'flex-end' }}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.heading}>Log in or Sign up</Text>
            <Text style={styles.subHeading}>Enter your mobile number to get an OTP</Text>
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

            <Button style={styles.button} onPress={handleLogin}>
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
  button: {
    backgroundColor: '#f0f1f5',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#979DB5',
    fontSize: 16,
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
  footerText: {
    color: '#676B89',

  },

});
