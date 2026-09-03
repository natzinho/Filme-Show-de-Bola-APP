# Catálogo de Filmes — Perguntas e Respostas

## 1. Pesquisa de bibliotecas

### 1. Quais bibliotecas o grupo escolheu para cada uma dessas três necessidades?

O grupo escolheu:

* Navegação entre telas: React Navigation.
* Consumo de API: Axios.
* Ícones: React Native Vector Icons utilizando Ionicons.

Para buscar os dados dos filmes, será utilizada a API do TMDB.

---

### 2. Por que escolheram cada uma delas, em vez de outras opções encontradas na pesquisa?

Escolhemos o React Navigation por ser uma biblioteca bastante utilizada em projetos React Native, possuir boa documentação e facilitar a navegação entre diferentes telas.

Escolhemos o Axios porque facilita a realização de requisições HTTP e permite centralizar configurações relacionadas à API.

Para os ícones, escolhemos React Native Vector Icons com Ionicons porque possui uma grande variedade de ícones e boa integração com React Native.

---

### 3. Alguma dessas bibliotecas precisa ser instalada com `npx expo install` em vez de `npm install`? Por quê?

Sim.

Algumas dependências do React Navigation, como:

* `react-native-screens`
* `react-native-safe-area-context`

devem ser instaladas utilizando:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

O `expo install` identifica a versão do Expo utilizada no projeto e instala versões compatíveis das bibliotecas.

---

### 4. Essas bibliotecas são bem mantidas e documentadas? Como o grupo verificou isso?

Sim.

O grupo verificou a documentação oficial das bibliotecas e seus repositórios.

Foram observados aspectos como:

* documentação disponível;
* exemplos de utilização;
* atualizações recentes;
* quantidade de usuários;
* manutenção dos projetos.

---

### 5. Existe alguma limitação ou ponto de atenção já identificado sobre alguma delas?

Sim.

No React Navigation é importante instalar corretamente todas as suas dependências.

No Axios é necessário tratar erros de conexão e possíveis falhas na API.

Também devemos ter cuidado com chaves ou tokens utilizados para acessar APIs, evitando colocá-los diretamente no código ou em repositórios públicos.

---

# 2. Arquitetura do projeto

### 6. Quais telas o app vai ter e o que cada uma exibe?

O aplicativo terá inicialmente duas telas.

#### HomeScreen

Será a tela inicial.

Ela exibirá uma lista de filmes contendo principalmente:

* pôster;
* título;
* avaliação ou ano.

#### MovieDetailsScreen

Será aberta quando o usuário selecionar um filme.

Ela exibirá informações completas, como:

* pôster;
* título;
* sinopse;
* data de lançamento;
* avaliação;
* gêneros.

---

### 7. Como os dados vão fluir entre a tela de listagem e a tela de detalhes?

A HomeScreen fará uma requisição para a API através da camada de serviços.

Após receber os filmes, eles serão apresentados na tela.

Quando o usuário tocar em um filme, o identificador daquele filme será enviado para a MovieDetailsScreen através do React Navigation.

A tela de detalhes poderá então utilizar esse ID para buscar as informações completas do filme.

Fluxo:

```text
API
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
API
```

---

### 8. Por que separar o código em `screens/`, `components/` e `services/` em vez de deixar tudo em um único arquivo?

Essa separação ajuda na organização e manutenção do projeto.

A pasta `screens` será responsável pelas telas.

A pasta `components` armazenará partes reutilizáveis da interface.

A pasta `services` será responsável pela comunicação com APIs.

Dessa maneira, cada parte do projeto possui uma responsabilidade específica.

Também facilita o trabalho em grupo e evita arquivos muito grandes.

---

### 9. Quais componentes reutilizáveis o grupo já consegue identificar que vai precisar?

Inicialmente identificamos os seguintes componentes:

* `MovieCard`;
* `Loading`;
* `ErrorMessage`;
* `MoviePoster`;
* `CustomButton`.

O `MovieCard` será utilizado para apresentar cada filme da lista.

---

### 10. Onde ficará centralizada a lógica de comunicação com a API? Por que isso é uma boa prática?

A comunicação com a API ficará centralizada na pasta:

```text
src/services/
```

Por exemplo:

```text
api.js
movieService.js
```

O arquivo `api.js` poderá possuir as configurações gerais da API.

O `movieService.js` poderá possuir funções como:

```text
getMovies()
getMovieDetails(id)
```

Isso evita colocar requisições diretamente nas telas e facilita futuras alterações.

---

# 3. Setup do projeto

### 11. O projeto rodou sem erros após a instalação das bibliotecas? Se não, o que precisou ser ajustado?

Sim.

Após instalar as bibliotecas e suas dependências, o projeto foi executado utilizando:

```bash
npx expo start
```

O projeto iniciou corretamente.

Caso algum erro seja identificado durante novos testes, utilizaremos as ferramentas do Expo para verificar as dependências.

---

### 12. Alguma biblioteca gerou conflito de versão com o SDK do Expo? Como o grupo resolveu ou pretende resolver?

Até o momento não foram identificados conflitos que impedissem a execução do projeto.

Para evitar incompatibilidades, utilizamos:

```bash
npx expo install
```

para dependências que possuem integração com o Expo.

Caso algum conflito seja identificado, podemos utilizar:

```bash
npx expo-doctor
```

e:

```bash
npx expo install --fix
```

---

# 4. README.md

### 13. Por que documentar as decisões do projeto desde o início é importante para o grupo?

A documentação registra as decisões tomadas durante o desenvolvimento.

Ela permite que todos os integrantes saibam:

* quais tecnologias foram escolhidas;
* quais bibliotecas são utilizadas;
* como o projeto está organizado;
* como executar o aplicativo.

Isso também evita depender apenas da memória dos integrantes.

---

### 14. Se outra pessoa entrasse no projeto agora, o README atual seria suficiente para ela entender o que foi decidido? Por quê?

Sim.

O README apresenta:

* objetivo do projeto;
* tecnologias utilizadas;
* bibliotecas;
* estrutura de pastas;
* telas;
* fluxo de dados;
* forma de executar o projeto.

Dessa maneira, uma nova pessoa consegue compreender rapidamente como o projeto está organizado.

---

# 5. Primeiro commit

### 15. O que esse primeiro commit representa dentro do desenvolvimento do projeto?

O primeiro commit representa o início oficial do desenvolvimento.

Ele registra a primeira versão da estrutura do projeto e cria um ponto inicial no histórico do Git.

Nesse momento foram definidos elementos como:

* estrutura inicial;
* arquivos do Expo;
* documentação;
* bibliotecas utilizadas.

---

### 16. Por que é importante começar o versionamento desde já, e não só quando o app estiver "pronto"?

Porque o Git permite acompanhar todas as alterações realizadas durante o desenvolvimento.

Começando desde o início, podemos:

* recuperar versões anteriores;
* identificar alterações;
* trabalhar em equipe;
* diminuir o risco de perda de código;
* manter um histórico do projeto.

Se o Git fosse utilizado somente no final, todo o histórico de desenvolvimento seria perdido.

---

### 17. Quais arquivos ou pastas vocês decidiram manter fora do controle de versão, e por quê?

Alguns arquivos e pastas não precisam ser enviados ao GitHub.

Entre eles:

```text
node_modules/
.expo/
.env
```

A pasta `node_modules` contém as dependências instaladas e pode ser recriada utilizando:

```bash
npm install
```

A pasta `.expo` possui arquivos locais gerados pelo Expo.

O arquivo `.env` poderá armazenar informações sensíveis, como tokens e chaves de API.

Esses arquivos devem ser adicionados ao `.gitignore`.

Já arquivos como:

```text
package.json
package-lock.json
README.md
RESPOSTAS.md
```

devem permanecer no repositório.
