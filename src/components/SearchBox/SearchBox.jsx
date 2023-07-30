
import { Button, Input,SearchBarStyle } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchBarStyle>
      <form action="" onSubmit={onSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Enter movie name"
          autoFocus
          autoComplete="off"
        />
        <Button type="submit" aria-label="Search movies">
          Search
        </Button>
      </form>
    </SearchBarStyle>
  );
};