import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function Splash() {
    const navigation = useNavigation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('Login');
      }, 4000); // Redirect to the 'Login' screen after 3 seconds (adjust as needed)
  
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/splash.png')} style={styles.backgroundImage}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerHeading}>Wishit</Text>
              <Text style={styles.text}>Food at your fingertips!</Text>
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 100, 
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  footer: {
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
  },
  footerHeading: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
