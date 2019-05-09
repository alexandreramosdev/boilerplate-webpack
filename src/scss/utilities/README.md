# Utilities

Por final temos Trumps / Utilities , que no RSCSS também são chamados de Helpers. 
Essa camada é a responsável pela maior especificidade de todas, tendo seus componentes até com !important. 
Mas não se engane e já comece a me xingar falando “ahhhh, ele usa important, que nojo.”, calma. 
A ideia dos trumps é que eles sejam usados para classes reativas, comumente aquelas que queremos que aconteça não importa o que aconteça, o clássico `.hidden`. 
Faz todo sentido que para esses casos, o !important seja utilizado.

É importante que você não confunda a existência dessa camada e saia colocando tudo aqui, essa camada somente deverá ser utilizada em casos que não vá afetar a estrutura da página.

``` scss
.hidden {
    display: none !important;
}
```
