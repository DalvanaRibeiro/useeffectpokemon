import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS } from '@/constants/colors'

// Componente de cabeçalho do aplicativo.
// Ele apresenta o título e uma descrição curta para o usuário.
export default function Header() {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.container}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>API + React Native</Text>
      </View>

      <Text style={styles.title}>Pokédex</Text>

      <Text style={styles.subtitle}>
        Busque Pokémons consumindo dados reais da PokéAPI.
      </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 24,
    paddingBottom: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 16
  },
  badgeText: {
    color: COLORS.white,
    fontWeight: '700'
  },
  title: {
    color: COLORS.white,
    fontSize: 38,
    fontWeight: '900'
  },
  subtitle: {
    color: COLORS.white,
    opacity: 0.9,
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22
  }
})
