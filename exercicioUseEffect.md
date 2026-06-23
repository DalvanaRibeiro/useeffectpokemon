# Exercício Prático – Consumo de API com UseEffect no React Native

## Sistema: Catálogo de Países do Mundo

Você foi contratado para desenvolver um aplicativo mobile que permita aos usuários consultar informações sobre países ao redor do mundo. Para isso, utilize a API pública REST Countries.

## API

```txt
https://restcountries.com/v3.1/all
```

---

## Requisitos Obrigatórios

Desenvolva uma aplicação em **React Native (Expo)** que:

### 1. Consuma a API

Utilize o método `fetch()` dentro de um `useEffect()` para buscar os dados da API quando a tela for carregada.

### 2. Liste os países

Exiba os países utilizando o componente `FlatList`.

### 3. Mostre as seguintes informações de cada país

* Bandeira
* Nome do país
* Capital
* População

### Exemplo de exibição

```txt
🇧🇷 Brasil
Capital: Brasília
População: 203.062.512 habitantes
```

---

### 4. Campo de Busca

Crie um campo de texto (`TextInput`) que permita ao usuário pesquisar países pelo nome.

#### Regras

* A busca deve ocorrer em tempo real.
* Não diferenciar letras maiúsculas e minúsculas.
* Exibir apenas os países que correspondem ao texto digitado.

---

### 5. Tratamento de Carregamento

Enquanto os dados estiverem sendo carregados, exiba:

```txt
Carregando países...
```

ou utilize um componente `ActivityIndicator`.

---

### 6. Tratamento de Erros

Caso ocorra algum problema ao acessar a API, exiba uma mensagem adequada para o usuário.

#### Exemplo

```txt
Não foi possível carregar os dados.
```

---

## Conceitos Obrigatórios

O projeto deve utilizar:

* useState
* useEffect
* fetch
* FlatList
* TextInput
* ActivityIndicator
* View
* Text
* Image
* filter()

---


---

## Entrega

Entregar o projeto React Native funcionando e apresentar:

1. Como foi realizado o consumo da API;
2. Como funciona o `useEffect`;
3. Como foi implementada a busca dos países;
4. Como foi realizado o tratamento de carregamento e erros.

---

## Observações

* O código deve estar organizado e comentado.
* A interface deve ser amigável e de fácil utilização.
* O projeto deverá funcionar corretamente no Expo Go.
