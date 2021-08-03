import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      genre: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <InputTitle />
          <InputSubtitle />
          <InputImagem />
          <InputTextArea />
          <InputNumber value={ rating } handleChange={ this.handleChange } />
          <InputSelect value={ genre } handleChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
