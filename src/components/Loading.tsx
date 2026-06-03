import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/constants/colors'

// Componente exibido enquanto os dados da API estão carregando.
export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.text}>Carregando Pokémons...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    alignItems: 'center'
  },
  text: {
    color: COLORS.white,
    marginTop: 12,
    fontSize: 15,
    fontWeight: '600'
  }
})
