# Marvel API 2.0
Projeto desenvolvido referente ao desafio proposto pela Kinghost

## Qual objetivo do projeto?
-Esse projeto visa criar um front-end para consumir a [API da Marvel](https://developer.marvel.com/documentation/authorization)

## Tecnologias Utilizadas
-JavaScript, HTML, CSS: São as tecnologias que mais possuo conhecimento no momento e que tive uma certa facilidade para usar.

## Requisitos
-A aplicação em si não precisa de nenhuma tecnologia especifica, apenas um navegador atualizado (Google Chrome, Mozila Firefox) irá funcionar.

## Como executar
-Para conseguir executar o projeto, voce pode baixar o conteudo .zip e extrair na sua maquina, após extrair com um duplo clique no arquivo "index.html" provavelmente ja irá carregar em seu navegador, caso não abra: clique com o botão direito do mouse e tente opções como "abrir com outro aplicativo" e selecione seu navegador.

-Ou pode clonar esse repositorio com o comando: 
git clone https://github.com/wesleibl/marvel2.0.git

## Como funciona a conexao a API

-Nos arquivos .js (connectSpider.js e connectIron.js, foi criado um fetch() fazendo a conexao com as url distintas de cada personagem, usando duas em cada um, uma para buscar os dados basicos do personagem: nome, foto e descrição;
E outra para buscar 2 historias em que cada um aparece, buscando: titulo, imagem e descrição da historia. (alguns a API nao possui uma descrição muito longa).

Foi preciso gerar a Key de autenticação no site da Marvel: https://developer.marvel.com/docs
  
-Deve fazer um hash de md5(1+privateKey+publicKey) o resultado sera sua hash para conexão, ele tambem pede o timespam no exemplo um usuario com a chave: public key of "1234" e a private key of "abcd" podera fazer conexoes validas usando: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (o valor do hash:ts+privateKey+publicKey).

-Na function getContent(), conseguimos fazer a conexão e precisamos declarar a partir de qual item do Array na API queremos pegar, na funçao foi declarado: 
let spider (ou) let iron = data.data.results[0]
ou seja, a varivel spier/iron agora ja esta na posição inicial para fazer as buscas.

-Na função showCharacter()
declaramos novamente a variavel spider/iron para reconhcer a função getContent() utilizando o  document.getElementById() conseguimos pegar a informação da API e passar para ID que esta declarada no HTML representado por cada heroi, detalhe nas thumbnails elas precisam especificar o .path e o .extension então foi necessario usar uma concatenação para unificar ambos, conforme abaixo:
let imgIron ou = `${iron.thumbnail.path}${'.'}${iron.thumbnail.extension}`

Também atualizado referente ao primeiro projeto este possui a conexão tanto com os personagem quanto as historias.
