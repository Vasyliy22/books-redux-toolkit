import Main from '../components/Main';
import Container from '../components/Container';
import { Route, Routes } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import * as state from '../store/reducers/books/booksSlice';
import { getUpdatedBooksList } from '../utils/getUpdatedBooksList';
import Content from '../components/Content';
import BooksContainer from './BooksContainer';
import BookContainer from './BookContainer';
import {
  selectBooks,
  selectFilter,
  selectLoading,
  selectLoadingMore,
  selectSearchPhrase,
  selectSort,
} from '../store/selectors';


const MainContainer = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const loadingMore = useAppSelector(selectLoadingMore);
  const loading = useAppSelector(selectLoading);
  const sort = useAppSelector(selectSort);
  const filter = useAppSelector(selectFilter);
  const searchPhrase = useAppSelector(selectSearchPhrase);

  useEffect(() => {
    dispatch(state.booksThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(state.moreBooksThunk(books));
  }

  const booksList = getUpdatedBooksList(books, { search: searchPhrase, filter, sort });

  return (
    <Main>
      <Container>
        <Content>
          <Routes>
            <Route path='/' element={
              <BooksContainer
                handleLoadMore={handleLoadMore}
                booksList={booksList}
                loading={loading}
                loadingMore={loadingMore}
              />
              }
            />
            <Route path='/:currentIndex' element={
              <BookContainer />
            } />
          </Routes>
        </Content>
      </Container>
    </Main>
  )
}

export default MainContainer;
