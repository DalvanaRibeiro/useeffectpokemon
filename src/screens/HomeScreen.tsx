import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import PokemonCard from '@/components/PokemonCard'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { COLORS } from '@/constants/colors'
import { getPokemonsWithDetails } from '@/services/pokemonApi'
import { PokemonDetails } from '@/types/Pokemon'

// Tela principal do app.
// Aqui usamos useState, useEffect, consumo da API e o buscador.
export default function HomeScreen() {
  // Estado que guarda todos os Pokémons carregados da API.
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([])

  // Estado que guarda o texto digitado no campo de busca.
  const [search, setSearch] = useState('')

  // Estado para controlar o carregamento inicial.
  const [isLoading, setIsLoading] = useState(true)

  // Estado para controlar atualização manual da lista.
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Estado para armazenar mensagem de erro, caso a API falhe.
  const [error, setError] = useState('')

  // Função responsável por carregar os dados da PokéAPI.
  async function loadPokemons() {
    try {
      setError('')

      const data = await getPokemonsWithDetails(40)

      setPokemons(data)
    } catch (err) {
      setError('Verifique sua internet e tente novamente.')
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  // useEffect executa quando a tela é carregada pela primeira vez.
  // O array vazio [] significa: execute apenas uma vez.
  useEffect(() => {
    loadPokemons()
  }, [])

  // useMemo evita refazer o filtro sem necessidade.
  // A lista só é filtrada novamente quando pokemons ou search mudam.
  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [pokemons, search])

  // Função usada quando o usuário puxa a lista para atualizar.
  function handleRefresh() {
    setIsRefreshing(true)
    loadPokemons()
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
      <Header />

      <SearchBar value={search} onChangeText={setSearch} />

      {isLoading && <Loading />}

      {!isLoading && error.length > 0 && (
        <ErrorMessage message={error} onTryAgain={loadPokemons} />
      )}

      {!isLoading && error.length === 0 && (
        <FlatList
          data={filteredPokemons}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor={COLORS.primary}
            />
          }
          ListHeaderComponent={
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>
                {filteredPokemons.length} Pokémon(s) encontrado(s)
              </Text>
            </View>
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Nenhum Pokémon encontrado com esse nome.
            </Text>
          }
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  list: {
    paddingTop: 18,
    paddingBottom: 28
  },
  resultBox: {
    marginHorizontal: 20,
    marginBottom: 14
  },
  resultText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700'
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    fontWeight: '600'
  }
})
