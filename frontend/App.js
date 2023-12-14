import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Navigation from './navigation';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { loadFonts } from './Fonts';

function FontLoader({ children }) {
  useEffect(() => {
    async function load() {
      await loadFonts();
    }
    load();
  }, []);

  return children;
}

export default function App() {
  
  return (
    <NativeBaseProvider>
      <FontLoader>
      <Navigation/>
      </FontLoader>
    </NativeBaseProvider>
  );
}
