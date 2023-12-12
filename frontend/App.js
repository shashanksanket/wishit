import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Navigation from './navigation';
import { NativeBaseProvider } from 'native-base';
export default function App() {
  
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
}
