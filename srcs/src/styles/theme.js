import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  textStyles: {
    titles: {
      fontSize: ["80px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%"
    }
  }
}

const theme = extendTheme({ config })

export default theme
