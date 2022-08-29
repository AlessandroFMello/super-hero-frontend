## Super Hero Front-End

**Caso queira testar a aplicação sem rodá-la localmente, ao fim do README.md constam os links do deploy da API** 

## Requisitos
* Linux / WSL Environment

# Instruções para iniciar a configuração do projeto para rodá-lo localmente:

1. Clone o repositório
  * http: `git clone https://github.com/AlessandroFMello/super-hero-frontend.git`.
  ou
  * ssh: `git@github.com:AlessandroFMello/super-hero-frontend.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd super-hero-frontend`

2. Instale as dependências
  * `npm install`

## Você está pronto para rodar a aplicação:

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

### `npm start`

Roda o app em modo de desenvolvimento.\

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

você deverá rodá-lo novamente para ver as alterações.

Caso queira autimatizar este processo e recarregar a página toda vez que fizer alguma alteração:
 *Altere o comando "scripts" no package.json para "react-scripts start"
 
Agora a página irá recarregar se você fizer aterações.\
Você também verá erros de lint no console.

### `npm run build`

Builda o app para produção na pasta`build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para deploy!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### Rotas da API (localmente)

* [http://localhost:3000](http://localhost:3000)

### Rotas da API (remotamente)

* [https://alessandro-super-hero-frontend.herokuapp.com/](https://alessandro-super-hero-frontend.herokuapp.com/)
