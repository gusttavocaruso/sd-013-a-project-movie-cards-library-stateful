import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <div>Teste</div>
    );
  }
}

export default AddMovie;

// Esse componente renderizará um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:

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
