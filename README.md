# Pokédex API 2026 - React Native + Expo

Projeto em **React Native com Expo**, usando **TypeScript**, **componentes**, **useState**, **useEffect**, **useMemo**, **FlatList**, buscador e consumo da **PokéAPI**.



## API utilizada

Este projeto utiliza a PokéAPI:

```txt
https://pokeapi.co/api/v2/pokemon
```

## Tecnologias

- React Native
- Expo
- Expo Router
- TypeScript
- PokéAPI
- Hooks: useState, useEffect e useMemo
- Componentização
- FlatList
- Fetch API

## Estrutura do projeto

```txt
pokemon-api-react-native-2026
│
├── app
│   ├── _layout.tsx
│   └── index.tsx
│
├── src
│   ├── components
│   │   ├── ErrorMessage.tsx
│   │   ├── Header.tsx
│   │   ├── Loading.tsx
│   │   ├── PokemonCard.tsx
│   │   └── SearchBar.tsx
│   │
│   ├── constants
│   │   └── colors.ts
│   │
│   ├── screens
│   │   └── HomeScreen.tsx
│   │
│   ├── services
│   │   └── pokemonApi.ts
│   │
│   ├── types
│   │   └── Pokemon.ts
│   │
│   └── utils
│       └── formatPokemonName.ts
│
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Onde está o consumo da API?

O consumo da API está no arquivo:

```txt
src/services/pokemonApi.ts
```

Essa separação é importante porque deixa o código mais profissional: a tela chama o serviço, e o serviço conversa com a API.

## Onde estão useState e useEffect?

Eles estão na tela principal:

```txt
src/screens/HomeScreen.tsx
```

- `useState` guarda os Pokémons, texto da busca, loading, refresh e erro.
- `useEffect` carrega os Pokémons quando a tela abre.
- `useMemo` filtra os Pokémons conforme a busca.

## Como executar

Entre na pasta do projeto e rode:

```bash
npm install
npm install expo@^54.0.0
npm run start

```

ou 
```bash

npx expo start
```

Depois, abra no celular com o aplicativo Expo Go ou execute no navegador com:

```bash
npm run web
```

## Comando oficial recomendado

A documentação atual do React Native recomenda iniciar novos projetos com um framework como o Expo. A documentação do Expo recomenda criar projetos com:

```bash
npx create-expo-app@latest
```

Para um projeto com estrutura atual, TypeScript e navegação, pode ser usado:

```bash
npx create-expo-app@latest --template default
```

## Sugestões de evolução para aula

- Criar tela de detalhes do Pokémon.
- Adicionar favoritos.
- Filtrar por tipo.
- Criar navegação com abas.
- Salvar favoritos localmente.
- Trabalhar com animações.


