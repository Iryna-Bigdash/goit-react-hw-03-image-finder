import { Component } from "react";
import SearchButton from 'components/SearchBtnIcon/SearchBtnIcon';
import { SearchForm, SearchFormBtn, SearchFormInput, SearchContainer } from './Searchbar.styled';
class Searchbar extends Component {
render(){
    return(
        <SearchContainer>
  <SearchForm>
    <SearchFormBtn type="submit">
    <SearchButton />
   Search
    </SearchFormBtn>

    <SearchFormInput
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchContainer>
    )
}
}

export default Searchbar;