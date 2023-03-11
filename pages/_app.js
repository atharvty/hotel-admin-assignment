import '../styles/globals.css'
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
function MyApp({ Component, pageProps }) {
  let defaultTheme = {
    colorScheme: 'light',
    focusRing: 'never',
    spacing: {
      xs: 4,
      sm: 12,
      md: 18,
      lg: 24,
      xl: 30
    }
  }
  return(
    <MantineProvider theme={defaultTheme}>
      <ModalsProvider>
      <Notifications />
          <Component {...pageProps} />


      </ModalsProvider>
  </MantineProvider>
  )
}

export default MyApp
