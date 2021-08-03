import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputTextArea from './InputTextArea';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <InputTitle />
          <InputSubtitle />
          <InputImagem />
          <InputTextArea />
        </form>
      </div>
    );
  }
}

export default AddMovie;
