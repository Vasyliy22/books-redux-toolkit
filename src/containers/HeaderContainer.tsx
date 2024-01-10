import { ChangeEventHandler } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useAppDispatch } from '../store/hooks';
import * as state from '../store/reducers/books/booksSlice';
import HeaderInner from '../components/Header/Inner';
import Title from '../components/Header/Title';
import HeaderContent from '../components/Header/HeaderContent';
import Search from '../components/Header/Search';
import HeaderButton from '../components/Header/ButtonSearch';
import Button from '../components/Header/Button';
import HeaderList from '../components/Header/HeaderList';
import HeaderItem from '../components/Header/HeaderItem';
import Filter from '../components/Header/Filter';
import Sort from '../components/Header/Sort';
import Label from '../components/Label';

const HeaderContainers = () => {
  const dispatch = useAppDispatch();
  const handleChangeFilter: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    dispatch(state.setFilter(value))
  };

  const handleChangeSort: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    dispatch(state.setSort(value));
  };

  const handleChangeSearchPhrase: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    dispatch(state.setSearchPhrase(value));
  };

  return (
    <Header>
      <Container>
        <HeaderInner>
          <Title title='Search for books' />
          <HeaderContent>
            <Search onChange={handleChangeSearchPhrase} />
            <HeaderButton>
              <Button />
            </HeaderButton>
          </HeaderContent>
        </HeaderInner>

        <HeaderList>
          <HeaderItem>
              <Label value="Categories" />
              <Filter  onFilter={handleChangeFilter} />
          </HeaderItem>

          <HeaderItem>
              <Label value="Sorting by" />
              <Sort onSort={handleChangeSort} />
          </HeaderItem>
        </HeaderList>
      </Container>
    </Header>
  )
}

export default HeaderContainers