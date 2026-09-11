Catálogo de Filmes — Parte 2

Como ficou a estrutura do componente de card de filme? Ele foi feito para ser reutilizado?

Criamos o componente MovieCard separado da tela principal. Ele recebe os dados do filme e exibe pôster, título e ano. Foi feito para ser reutilizado em outras telas no futuro.

De onde vêm os dados exibidos na lista?

Os dados vêm da API do TMDB. A chamada foi centralizada em services/movieService.js, deixando a tela mais organizada.

O que acontece enquanto os dados estão sendo carregados?

Enquanto a API responde, o usuário vê um indicador de carregamento com a mensagem “Carregando filmes...”.

Qual biblioteca de navegação foi usada e como os dados são passados?

Utilizamos React Navigation com Native Stack. Ao tocar em um filme, enviamos o ID dele para a tela de detalhes.

A tela de detalhes busca os dados novamente ou reaproveita os anteriores?

A tela de detalhes recebe o ID e faz uma nova consulta à API. Escolhemos isso porque a API de detalhes retorna informações mais completas.

É possível voltar sem perder o estado da lista?

Sim. Ao voltar da tela de detalhes, a tela de listagem continua funcionando normalmente e mantém seu estado durante o fluxo.

O que acontece se a API demorar ou falhar?

Se demorar, aparece o indicador de carregamento. Se a requisição falhar, aparece uma mensagem de erro informando que não foi possível carregar os filmes.

Foi implementado retry?

Sim. Criamos um botão “Tentar novamente”, que refaz a requisição. Isso é importante porque a conexão em dispositivos móveis pode cair ou oscilar.

Em quais ambientes o aplicativo foi testado?

Testamos em um iPhone físico usando Expo Go e também no navegador pelo Expo Web. Nos dois ambientes o fluxo principal funcionou.

Quais problemas foram encontrados?

Durante os testes encontramos alguns problemas de configuração. O projeto estava no Expo SDK 54 e o Expo Go utilizava SDK 57, então foi necessário atualizar o projeto. Também foi necessário fazer login no Expo CLI e instalar react-dom e react-native-web para rodar no navegador.

Por que testar em mais de um ambiente?

Porque um aplicativo híbrido pode se comportar de forma diferente dependendo da plataforma, tamanho da tela e sistema operacional. Testar em mais de um ambiente ajuda a encontrar incompatibilidades.

Qual ferramenta de teste foi utilizada?

Utilizamos Jest com jest-expo, porque possui boa integração com projetos Expo e permite criar testes automatizados de forma simples.

O que o teste verifica?

O teste verifica a função formatMovie, responsável por organizar os dados recebidos da API. Ele testa ID, título, ano, avaliação, pôster e gêneros. Não cobre navegação, interface ou conexão real com a API.

Qual a diferença entre teste automatizado e teste manual?

O teste automatizado verifica uma parte específica do código. O teste manual verifica o funcionamento completo do aplicativo pela visão do usuário, incluindo tela, navegação e interação.

O que foi acrescentado ao README?

Foram adicionadas informações sobre as telas, navegação, integração com a API, tratamento de erros, loading e testes realizados.

O que esse commit representa em relação ao anterior?

O primeiro commit representava apenas o setup e a estrutura inicial. O novo commit representa o MVP funcional, com listagem de filmes, tela de detalhes e navegação.

Qual seria o próximo problema ou funcionalidade importante?

O próximo passo seria melhorar a busca pelos filmes, adicionando pesquisa e paginação. Também poderiam ser implementados favoritos, filtros, cache e mais testes automatizados.