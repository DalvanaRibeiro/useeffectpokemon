import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { COLORS } from '@/constants/colors'

// Layout principal do Expo Router.
// Em projetos atuais com Expo, a pasta app controla as telas e a navegação.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLORS.background
          }
        }}
      />
    </>
  )
}
