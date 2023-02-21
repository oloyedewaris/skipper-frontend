import { NativeBaseProvider, Box } from "native-base";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native";
import theme from './utils/theme'
import NavContainer from "./navigations";

function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/Poppins/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./assets/Poppins/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('./assets/Poppins/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./assets/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/Poppins/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraLight': require('./assets/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraLightItalic': require('./assets/Poppins/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Italic': require('./assets/Poppins/Poppins-Italic.ttf'),
    'Poppins-Light': require('./assets/Poppins/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('./assets/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-Medium': require('./assets/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Poppins/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Thin': require('./assets/Poppins/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('./assets/Poppins/Poppins-ThinItalic.ttf'),
  });


  return (
    <>
      {fontsLoaded ? (
        <NativeBaseProvider theme={theme}>
          <NavContainer />
        </NativeBaseProvider>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

export default App;

