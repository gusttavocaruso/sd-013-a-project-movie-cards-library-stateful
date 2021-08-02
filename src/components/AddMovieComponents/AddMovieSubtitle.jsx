import React from 'react';

class Subtitle extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     subtitle: '',
  //   };
  // }

  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input type="text" id="subtitle" data-testid="subtitle-input" />
      </label>
    );
  }
}

export default Subtitle;
