# Components

Aqui como o nome já diz, teremos nossos componentes já mais específicos. 
De acordo com o RSCSS, aqui que vamos jogar todos aqueles componentes/elementos criados. 
Enquanto nos objetos nós tentamos abstrair o máximo possível, para ter muitos objetos reutilizáveis e genéricos, aqui nós vamos ser específicos ao criar os componentes, mas respeitando as regras do RSCSS de especificidade e também não colocando positions ou outras propriedades que engessem muito o componente a ponto dele não ser reutilizável.

Normalmente, aqui ficarão listas específicas como de produtos, cards específicos como aqueles incluindo imagens, etc. S

eguindo o RSCSS, teríamos algo como:

``` scss
.products-list {
    @extend font-brand();
    border-top: 1px solid $color-ui;

    > .item {
        border-bottom: 1px solid $color-ui;
    }
}
```