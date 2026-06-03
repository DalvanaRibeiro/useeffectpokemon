// Tipos usados no projeto.
// TypeScript ajuda a evitar erros e deixa o código mais profissional.

export type PokemonListItem = {
  name: string
  url: string
}

export type PokemonDetails = {
  id: number
  name: string
  height: number
  weight: number
  image: string
  types: string[]
}
