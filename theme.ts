// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  colors: {
    black: {
      100: "000000",
    },
    white: {
      100: "#ffffff",
    },
    secondary: {
      100: "#c4c8fb36",
    },
    tertiary: {
      100: "#6f79f1",
      200: "#4250f7",
    }  
  },
  styles: {
    global: {
      "html":{
        height: "100%",
      },
      "html, body, #root": {
        backgroundColor: "secondary.100",
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
})
