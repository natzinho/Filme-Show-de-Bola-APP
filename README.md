#  Catálogo de Filmes

Aplicativo mobile desenvolvido em React Native com Expo para a disciplina de Desenvolvimento Mobile.

O objetivo do projeto é criar um catálogo de filmes com uma tela inicial contendo uma lista de filmes e uma tela de detalhes com informações completas sobre o filme selecionado.

## Integrantes

* Gustavo dos santos Nobre
* Natanael De Jesus Noronha


## Tecnologias utilizadas

* React Native
* Expo
* JavaScript
* Git
* GitHub

## Bibliotecas escolhidas

### Navegação

React Navigation

Pacotes utilizados:

* `@react-navigation/native`
* `@react-navigation/native-stack`
* `react-native-screens`
* `react-native-safe-area-context`

Responsável pela navegação entre a tela de listagem e a tela de detalhes.

### Consumo de API

Axios

Responsável pelas requisições HTTP realizadas para buscar as informações dos filmes.

### Ícones

React Native Vector Icons com Ionicons.

Pacote:

`@react-native-vector-icons/ionicons`

Responsável pelos ícones utilizados na interface do aplicativo.

## API

O projeto utilizará a API do TMDB — The Movie Database — para obter informações sobre os filmes.

## Estrutura do projeto

```text
catalogo-filmes/
│
├── assets/
│
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── Loading.js
│   │   └── ErrorMessage.js
│   │
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── MovieDetailsScreen.js
│   │
│   └── services/
│       ├── api.js
│       └── movieService.js
│
├── App.js
├── README.md
├── RESPOSTAS.md
├── package.json
└── .gitignore
```

## Organização das pastas

### screens/

Responsável pelas telas completas do aplicativo.

### components/

Responsável pelos componentes reutilizáveis da interface.

### services/

Responsável pela comunicação com APIs externas.

### assets/

Responsável por imagens e outros arquivos utilizados pelo aplicativo.

## Telas

### HomeScreen

Tela inicial responsável por apresentar a lista de filmes.

Cada filme poderá apresentar:

* pôster;
* título;
* avaliação;
* ano de lançamento.

### MovieDetailsScreen

Tela responsável por apresentar informações completas sobre o filme selecionado.

Poderá apresentar:

* pôster;
* título;
* sinopse;
* data de lançamento;
* avaliação;
* gêneros.

## Fluxo dos dados

```text
API TMDB
   ↓
services
   ↓
HomeScreen
   ↓
MovieCard
   ↓
ID do filme
   ↓
MovieDetailsScreen
   ↓
services
   ↓
API TMDB
```

## Como executar o projeto

Instalar as dependências:

```bash
npm install
```

Iniciar o projeto:

```bash
npx expo start
```

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento do código-fonte.
