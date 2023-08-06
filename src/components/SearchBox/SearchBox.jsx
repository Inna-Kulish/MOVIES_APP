import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Icon, Input, FormBtn } from './SeachBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        autoFocus
        placeholder="Search movie"
        type="text"
        value={query}
        onChange={handleChange}
      />
      <FormBtn type="submit">
        <Icon />
      </FormBtn>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
