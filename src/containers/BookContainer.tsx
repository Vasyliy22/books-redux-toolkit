import React, { useEffect } from 'react';
import CurrentBook from '../components/CurrentBook';
import * as currentBook from '../store/reducers/book/bookSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useParams } from 'react-router';
import Loader from '../components/Loader' 
import { selectCurrentBook, selectLoadingBook, } from '../store/selectors';

const BookContainer = () => {
  const book = useAppSelector(selectCurrentBook);
  const loadingBook = useAppSelector(selectLoadingBook);
  const dispatch = useAppDispatch();
  const { currentIndex } = useParams();

  // useEffect(() => {
  //   if (bookId && currentIndex !== undefined) {
  //     dispatch(currentBook.bookThunk({ id: bookId, currentIndex }));
  //   }
  // }, [dispatch, bookId, currentIndex]);

  useEffect(() => {
    if (currentIndex) {
      dispatch(currentBook.bookThunk(+currentIndex - 1));
    }
  }, [dispatch, currentIndex]);

  if (loadingBook) return <Loader />;

  return <CurrentBook book={book} />
}

export default BookContainer;
