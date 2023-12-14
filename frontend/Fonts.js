import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'GTBold': require('./assets/fonts/GT_Walsheim_Pro/GTWalsheimPro-Bold.ttf'),
    'GTWRegular': require('./assets/fonts/GT_Walsheim_Pro/GTWalsheimPro-Regular.ttf'),
    'GTWMedium': require('./assets/fonts/GT_Walsheim_Pro/GTWalsheimPro-Medium.ttf'),
    'GTWBlack': require('./assets/fonts/GT_Walsheim_Pro/GTWalsheimPro-Black.ttf'),
    'GTAMedium': require('./assets/fonts/GT_America/GT-America-Standard-Medium-Trial.otf'),
    'GTABold': require('./assets/fonts/GT_America/GT-America-Standard-Bold-Trial.otf'),
    'GTABlack': require('./assets/fonts/GT_America/GT-America-Standard-Black-Trial.otf'),
    'GTARegular': require('./assets/fonts/GT_America/GT-America-Standard-Regular-Trial.otf'),
  });
}
