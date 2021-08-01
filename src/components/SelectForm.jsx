import React from 'react';

class Select extends React.Component {
  render() {
    // const { onChange } = this.props;
    // const { value } = this.props;
    console.log(this.props.value)
    return (
      <label data-testid="select-input-label" htmlFor="selectArea">
        <select
          id="selectArea"
          // value={ value }
          // onChange={ onChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
