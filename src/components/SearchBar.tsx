import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'

import { COLORS } from '@/constants/colors'

type Props = {
  value: string
  onChangeText: (text: string) => void
}

// Componente de busca.
// Recebe o valor e a função de alteração por props.
export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color={COLORS.muted} />

      <TextInput
        placeholder="Buscar Pokémon..."
        placeholderTextColor={COLORS.muted}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: -24,
    paddingHorizontal: 16,
    borderRadius: 18,
    height: 56,
    gap: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text
  }
})
