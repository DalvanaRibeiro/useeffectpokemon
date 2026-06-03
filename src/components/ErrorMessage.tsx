import { Pressable, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/constants/colors'

type Props = {
  message: string
  onTryAgain: () => void
}

// Componente de erro com botão para tentar carregar novamente.
export default function ErrorMessage({ message, onTryAgain }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ops! Algo deu errado.</Text>
      <Text style={styles.message}>{message}</Text>

      <Pressable style={styles.button} onPress={onTryAgain}>
        <Text style={styles.buttonText}>Tentar novamente</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 32,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.text
  },
  message: {
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 16
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '800'
  }
})
