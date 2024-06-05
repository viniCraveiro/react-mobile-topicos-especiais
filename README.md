- ALUNO: VINICIUS DE OLIVEIRA CRAVEIRO
- RA: 22092167-2
- TURMA: ADSIS5S-N-A

- Github SATIN: https://github.com/satinP
- Github Topicos Especiais:  https://github.com/TI-UNICESUMAR/2024-topicos-especiais-ads5s

# Entregas:
- 1º Entrega: :white_check_mark:
https://docs.google.com/forms/d/e/1FAIpQLScjvul-kmX0O1NbCnqeGxurVlnX1aAMM7AEVxf_fLLHn-Jhxw/viewform

- 2º Entrega: :heavy_check_mark:
 https://forms.gle/6wzL5yMxYdWkW8A89

 https://reactnavigation.org/docs/hello-react-navigation

 https://reactnative.dev/docs/network

 https://github.com/TI-UNICESUMAR/2024-topicos-especiais-ads5s/blob/main/2024-03-20/exemplos.md

 # 

- 3º Entrega: :x:
 https://dontpad.com/ads-5-27-03
 
 https://forms.gle/3heXPqbfFShLCt4T6

 Adicionar no package.json os pacotes: 

    "react-native-reanimated": "~3.6.2",
    "@react-navigation/bottom-tabs": "6.x",
    "@react-native-async-storage/async-storage": "1.21.0"

A partir do arquivo da aula passada (link acima), realizar as seguintes alterações:

1. Criar um BottomStackNavigator, onde a primeira Tab seja a do Squirtle e a segunda tab chamada Todo List
2. A primeira Tab do Squirtle deverá incorporar a Stack Navigation das Páginas do Squirtle e do Pokemon
3. A Segunda Tab da Todo list deverá incorporar somente uma Stack Navigation que possui uma unica Screen de uma página da TodoList.
4. A página da TodoList deverá ter um TextInput, um Botão e um Texto, quando houver texto no input e clicar no Botão para salvar, o texto deverá ser salvo em um AsyncStorage.
5. A página deverá sempre mostrar o texto salvo no AsyncStorage.

OBS: O BottomTab Navigator vai substituir o atual Stack Navigator, onde a primeira Tab Screen será a Stack de navegação da tela do Squirtle e do Pokemon e a segunda Tab Screen será uma Stack com uma tela do Todo List.

Extra:

- Salvar e mostrar uma lista de itens no AsyncStorage
- Adicionar funcionalidade de editar/excluir um item

Documentações auxiliares:
https://reactnavigation.org/docs/bottom-tab-navigator/
https://react-native-async-storage.github.io/async-storage/
https://reactnative.dev/docs/asyncstorage

# 

- 4º Entrega: :x:

A partir da resolução da atividade do dia 27, disponível em: https://snack.expo.dev/@satinp/squirtle-todo-tab-navigation, adicionar as seguintes funcionalidades:

1. Salvar uma lista de itens da todo list no AsyncStorage (atualmente só salva um item);
2. Adicionar a funcionalidade de deletar o item da lista, ao clicar em cima dele;

Sugestões:
O AsyncStorage só salva strings, então antes de salvar a lista é necessário utilizar a função JSON.stringfy() para que o array seja transformado em string, ex:

const lista = [1,2,3]
AsyncStorage.setItem('chave', JSON.stringify(lista))

E para recuperar a lista do AsyncStorage, utilizar o JSON.parse() que irá transformar a string em uma lista, ex:

const asItem = AsyncStorage.getItem('chave') // "[1,2,3]"
const parsedItem = JSON.parse(asItem) // [1,2,3]

# 

- 5º Entrega: :x:

https://docs.google.com/forms/d/e/1FAIpQLSfbKxjPdgIZGFnF3GoRtVpPvwaIYPSbE0ncOgvZrLSmWCozPg/viewform

A partir da resolução da atividade anterior: https://snack.expo.dev/@satinp/tab-todo---list-e-delete

Realizar as seguintes funcionalidades:

1. Adicionar ícones às Bottom Tabs, link da doc e onde ver os ícones (eu utilizei ícones do Ant design);
2. Remover o input e o botão que eram utilizados para criar uma nova tarefa;
3. Adicionar um ícone clicável no Header da Todo List que será responsável por abrir a modal;
4. Criar a modal de acordo com a imagem 3, a modal que terá a funcionalidade ler a tarefa e adicioná-la a nossa lista;
5. Utilizar o componente Swipeable da biblioteca react-native-gesture-handler e adicioná-la em cada item da lista para que, no swipe da direita para a esquerda, apareca um botão para deletar o nosso item da lista.

OBS: Todo item da lista será um Swipeable, para aceitar o gesto de swipe e mostrar o ícone de deletar

Links para auxiliar:
BottomTab Navigator (Adicionar icones nas bottom tabs)
ReactNavigation Header buttons (Adicionar icone a direita do Header)
React native Modal (Abrir a modal ao clicar no icone do header)
React native gesture handler - Swipeable (Como utilizar)

Cores utilizadas:
ícone header: "darkseagreen"
background do ícone de deletar: "lightcoral"

#

- 6º Entrega: :x:
https://docs.google.com/forms/d/e/1FAIpQLSdMXAfw464-kTbFXq9-v1vVBDQxahdleCjp7xS5CE_Zr7znAw/viewform

EXPO SNACK: https://snack.expo.dev/@git/github.com/satinP/topicos-especiais-app

A partir da atividade: Expo snack, acrescentar as seguintes funcionalidades:
Código no Github

Doc de como utilizar custom hooks

1. Criar um custom hook, chamado useAsyncStorage para controlar como recuperamos e salvamos os dados no AsyncStorage. O hook deverá aceitar dois parâmetros, um para a chave do AsyncStorage, e outro com o valor inicial.

2. Extrair a FlatList para um componente separado e a envelopar em um React.memo, para evitar Rerenders. Esse processo ficará mais fácil de ser aplicado utilizando o hook useAsyncStorage, que já vai ter os dados da lista.

#

- 7º Entrega: :x:
A partir da atividade https://snack.expo.dev/@satinp/17-04, implementar as seguintes funcionalidades:

- Adicionar um novo botão no gesto de swipe para a esquerda, para editar um item;
- Editar deverá carregar os dados de título e descrição do item;
- O texto do botão deverá ser "Editar" quando estiver editando e "Adicionar" quando estiver criando;
- Ao clicar em Editar, o item deverá ser atualizado no AsyncStorage.

Utilizei a cor lightgreen na cor de fundo do botão e o ícone edit do Ant Design.

Repositório com o código: https://github.com/satinP/topicos-especiais-app

#

- 8º Entrega: :white_check_mark:
https://forms.gle/RRE3rE8cA6MZ225q7
https://dontpad.com/adsis5-22-05

A partir da resolução da atividade da semana passada: https://snack.expo.dev/@satinp/15-05, ou pelo repositório: https://github.com/satinP/topicos-especiais-app

Implementar a seguinte funcionalidade:

Criar uma tela de login e privar a tab de Todo para usuários "logados":

[X] Criar uma nova tela de Login, LoginScreen, que tenha inputs de usuário e senha e um botão de fazer login;
[X] Adicionar uma validação na ToDoListStackNavigator, que mostre essa tela de Login para quem não estiver autenticado;
[X] A autenticação será uma simulação, utilizando um dado no AsyncStorage, caso não tenha esse valor no AyncStorage, mostre a tela de login, caso exista o valor, mostre a TodoListScreen.

Utilize o hook useAsyncStorage para verificar e atualizar o dado de usuário logado.

Documentação sobre Autenticação utilizando o React Navigation: https://reactnavigation.org/docs/auth-flow/

#

- 9º Entrega: :white_check_mark:
Entreguei porem o github zoou e nao salvou as alterações, subindo agora.

#

- 10º Entrega: :white_check_mark: