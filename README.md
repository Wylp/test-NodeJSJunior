# Contele International Project

## Introdução

Esse projeto foi uma solicitação feita pela empresa com base em uma imagem com o prazo de 7 dias.
O projeto utiliza como base o FrameWork *React* que é amplamente utilizado no mercado nos dias atuais e possui um vasto leque de possibilidades, tendo como a sua principal caracteristica a componentização dos elementos, trazendo assim uma melhor organização em seu código.

## Processo de Criação

Para criar o projeto com este framework primeiramente eu organizei as pastas de forma que elas ficassem distribuidas e alinhadas de acordo com cada uma de suas funções fazendo assim com que seja possivel obter uma melhor visualização.

![_src_components_template](https://user-images.githubusercontent.com/56663586/113720823-627cc580-96c5-11eb-83e8-8a14d69d0a7c.png)

Na pasta components é possivel encontrar todos os elementos que compõem a pagina. Observa-se que existem dois tipos de arquivos que possuem uma grande semelhança o arquivo "BillingAddress.jsx" e o arquivo "Addresss.jsx", a principio acreditei que poderia utilizar o Address.jsx para fazer as duas *div* somente alterando a propriedade porém acabei separando-as para ter um melhor gerenciamento das informações sendo possivel separar seus *id's, propriedades* e tendo os dados salvos em seu *state*. Mas no fim não acabei por chegar em uma solução definitiva visto que no meio do processo tive alguns problemas em relação a tranferencia da informação.

A pasta *data* inserida em *Components* serve justamente para armazenar as listas que são utilizadas nos parametros *list* do *input* no código principal, visando facilitar a visualização e manutenção.

Todos os estilos foram armazenados na pasta *style* com o nome de seus respectivos componentes.

Em *content* eu reuni e importei todos os componentes do corpo central da pagina assim centralizando o formulário obtido.

Exportando *content* para *main* eu pude fazer com que o arquivo App.jsx tivesse uma melhor visualização separando o que seria o corpo central do restante do documento, como por exemplo a logo localizada no header da página.

Em relação a disposição das informações e o seu agrupamento e centralização eu consegui pensar em somente um método porém não consegui colocá-lo em pratica que seria utilizar um JSON local para reunir as informações e utilizar um novo componente chamado *dataProcess.jsx* para a centralização e o tratamento de todos os dados simultaneamente gerando por fim um conjunto de dados que seria enviado ao respectivo Banco de Dados.

Ao observar o que deveria ser feito organizei as etapas em um pequeno checklist que descrevia o que deveria ser feito, porém no fim não consegui completa-lo:

 ### Lista:
 
 - [x] Criar e implementar todos os componentes
 - [x] Definir a estilização para cada um
 - [x] Criar a Pagina principal contendo todo conteúdo
 - [ ] Centralizar todas as informações para o tratamento
 - [ ] Criar um JSON server para servir como simulador de Banco
 - [ ] Responsividade para outras Resoluções

## Conclusão
No fim acredito que da mesma forma acredito que essa experiência me proporcionou muito aprendizado visto que eu aprendi diversas coisas que eu jamais havia imaginado antes. Pude aprender e colocar em pratica novas tecnologias que estão alinhadas com o mercado, então acredito que foi uma boa experiência. Caso queira deixar algum comentário ou propor alguma resolução fico a disposição.

