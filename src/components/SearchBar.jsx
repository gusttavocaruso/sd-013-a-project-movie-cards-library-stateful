import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
// 2 - Renderize um formulário dentro de <SearchBar />
// Dentro desse formulário haverá campos usados na filtragem de cartões.

// Esse formulário deve apresentar o atributo data-testid="search-bar-form"
// O que será verificado:

// Será validado se é renderizado 1, e apenas 1, form dentro de <SearchBar />
