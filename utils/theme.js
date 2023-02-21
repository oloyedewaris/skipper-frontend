import { extendTheme } from "native-base";

export default theme = extendTheme({
  colors: {
    primary: {
      100: '#FFE0CC',
      200: '#FFCCAA',
      300: '#FFB280',
      400: '#FF9955',
      500: '#FF802A',
      600: '#FF6F0F',
      700: '#D45500',
      800: '#AA4400',
      900: '#803300',
    },
    secondary: {
      700: '#1E4262',
      800: '#1E4262',
      900: '#102232',
    },
    error: {
      600: '#D00000',
      700: '#AD0000'
    }
  },
  config: {
    initialColorMode: 'dark',
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
    },
  },
  fonts: {
    heading: "Poppins-Black",
  },
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {
        colorScheme: 'red',
      },
    },
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }) => {
        return {
          color: colorMode === 'dark' ? 'red.300' : 'blue.300',
          fontWeight: 'normal',
        };
      },
    },
    Text: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }) => {
        return {
          color: '#3A3A3A',
          fontWeight: 'normal',
        };
      },
    }
  },
});