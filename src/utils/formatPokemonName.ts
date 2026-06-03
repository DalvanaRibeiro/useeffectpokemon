// Função utilitária para deixar o nome do Pokémon mais bonito.
// Exemplo: "pikachu" vira "Pikachu".
export function formatPokemonName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
