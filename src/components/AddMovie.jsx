import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

export default AddMovie;

// 6- Esse componente renderizará um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:

//   - subtítulo
//   - título
//   - caminho da imagem
//   - sinopse
//   - avaliação
//   - gênero

// `<AddMovie />` deve receber como prop:

//   - `onClick`, uma callback

// O componente `<AddMovie />` possui como estado as seguintes propriedades:

//   - `subtitle`: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
//   - `title`: guarda o título preenchido no formulário por quem usa a aplicação;
//   - `imagePath`: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
//   - `storyline`: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
//   - `rating`: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
//   - `genre`: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.

// Ou seja, o estado de `<AddMovie />` contém as informações do novo filme que foram inseridas por quem usa a aplicação. O estado inicial do componente `<AddMovie />` deve ser:

//   - `subtitle`: '';
//   - `title`: '';
//   - `imagePath`: '';
//   - `storyline`: '';
//   - `rating`: 0;
//   - `genre`: 'action'.

// **O que será verificado:**
//   - Será validado se o componente renderiza

// ------------------------------------------

// 7 - Renderize um formulário dentro de `<AddMovie />`

// Dentro desse formulário haverá campos usados para preencher informações do novo cartão a ser adicionado na biblioteca.

// **O que será verificado:**
//   - Será validado se o componente renderiza 1, e apenas 1, form
//   - O form deve conter o atributo `data-testid="add-movie-form"`

// ------------------------------------------

// ### 8 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme

// - O input deve ter uma label associada com o texto: **"Título"**;

// - Essa label deve apresentar o atributo `data-testid="title-input-label"`

// - O input deve ter seu valor inicial provido pelo estado inicial do componente, via `title`;

// - Esse input deve apresentar o atributo `data-testid="title-input"`

// - A propriedade `onChange` deve atualizar o estado de `<AddMovie />`, atribuindo a `title` o atual título contido no input.

// **O que será verificado:**
//   - Será validado se o componente renderiza um input de texto para quem usa escrever o titulo do filme
//   - Será validado se o componente renderiza a label "Título" para o input de titulo
//   - Será validado se o estado inicial do titulo é "", ou seja, uma string vazia
//   - Será validado se o valor do input de título muda quando algo é digitado por quem usa.
