import { Image, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/constants/colors'
import { PokemonDetails } from '@/types/Pokemon'
import { formatPokemonName } from '@/utils/formatPokemonName'

type Props = {
  pokemon: PokemonDetails
}

// Card responsável apenas por exibir as informações do Pokémon.
// Repare que ele não busca dados da API. Isso deixa o componente mais limpo.
export default function PokemonCard({ pokemon }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: pokemon.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.number}>#{String(pokemon.id).padStart(3, '0')}</Text>

        <Text style={styles.name}>{formatPokemonName(pokemon.name)}</Text>

        <View style={styles.typeContainer}>
          {pokemon.types.map((type) => (
            <Text key={type} style={styles.type}>
              {type}
            </Text>
          ))}
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.info}>Altura: {pokemon.height / 10} m</Text>
          <Text style={styles.info}>Peso: {pokemon.weight / 10} kg</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 14,
    marginHorizontal: 20,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border
  },
  imageBox: {
    width: 92,
    height: 92,
    borderRadius: 22,
    backgroundColor: COLORS.input,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 82,
    height: 82
  },
  content: {
    flex: 1,
    marginLeft: 14
  },
  number: {
    color: COLORS.muted,
    fontWeight: '700',
    marginBottom: 2
  },
  name: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '900'
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8
  },
  type: {
    backgroundColor: '#FEF3F2',
    color: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '800'
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10
  },
  info: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600'
  }
})
