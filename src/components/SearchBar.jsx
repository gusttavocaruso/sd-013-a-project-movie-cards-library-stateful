import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <Form>
        <input type="text" />
        <label value="searchText">"Inclui texto:</label>
      </Form>
    );
  }
}
export default SearchBar;