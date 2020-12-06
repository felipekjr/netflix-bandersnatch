# Netflix Bandersnatch
- Acesse o [index](src/views/home.ejs) para visualizar a lista de titulos
- Acesse o [bandersnatch](src/views/video-player.ejs) para acessar o titulo base do projeto

## Lista de Títulos

![titulos](./prints/titulos.png)

## Setup
docker build -t netflix:latest .
docker run --name netflix-container -p 8080:80 -t netflix:latest

ou docker-compose up


## Vídeo

![titulos](./prints/demo.png)

### Créditos
- Projeto de estudo da Semana JS Expert realizada por [Erick Wendel] (https://www.instagram.com/erickwendel_/)
- Layout da lista foi baseada no  codepen do [Carlos Avila
](https://codepen.io/cb2307/pen/XYxyeY)
- Layout do video foi baseado no codepen do [Benjamin Pott](https://codepen.io/benjipott/pen/JELELN)
