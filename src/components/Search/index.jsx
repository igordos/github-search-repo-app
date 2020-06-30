// @flow strict
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';

type SearchProps = {
  placeholder?: string,
  searchValue?: string,
  onChange?: (value: string) => void,
};

const Search = React.forwardRef<SearchProps, {}>(
  (
    { placeholder = 'Search', searchValue = '', onChange = () => {} }: SearchProps,
    ref,
  ): React.Node => {
    const [value, setValue] = useState(searchValue);
    const [focused, setFocused] = useState(false);

    const handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

    useEffect(() => {
      setValue(searchValue);
    }, [searchValue]);

    useEffect(() => {
      onChange(value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
      <form
        className={`${styles.Search} ${focused ? styles.Search_focused : ''}`}
        onSubmit={handleFormSubmit}
      >
        <input
          ref={ref}
          className={styles.Search__input}
          type="text"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          onChange={(e: SyntheticInputEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      </form>
    );
  },
);

export default Search;
