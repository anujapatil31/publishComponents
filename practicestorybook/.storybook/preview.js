import React from "react"
import { addDecorator } from '@storybook/react'
import Center from "../src/components/Center/Center"
import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/core'

addDecorator(story => (
<ThemeProvider theme={theme}>
  <CSSReset/>
  <Box m='4'>{story()}</Box>
  
  </ThemeProvider>
)) //for every story we write wrap it with decorator/component Center and also with Center component if used

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
//configuration file for the stories we write