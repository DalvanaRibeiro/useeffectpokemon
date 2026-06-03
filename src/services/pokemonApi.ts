import { PokemonDetails, PokemonListItem } from '@/types/Pokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

// Busca uma lista inicial de Pokémons.
// A PokéAPI retorna nome e URL de detalhes de cada Pokémon.
export async function getPokemons(limit = 30): Promise<PokemonListItem[]> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`)

  if (!response.ok) {
    throw new Error('Não foi possível carregar a lista de Pokémons.')
  }

  const data = await response.json()

  return data.results
}

// Busca detalhes completos de um Pokémon pelo nome.
// Usamos esta função para exibir imagem, tipo, peso e altura.
export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
  const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`)

  if (!response.ok) {
    throw new Error('Pokémon não encontrado.')
  }

  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    image:
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default,
    types: data.types.map((item: any) => item.type.name)
  }
}

// Busca vários detalhes ao mesmo tempo.
// Promise.all executa várias requisições de forma paralela.
export async function getPokemonsWithDetails(limit = 30): Promise<PokemonDetails[]> {
  const pokemons = await getPokemons(limit)

  const details = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon.name))
  )

  return details
}
