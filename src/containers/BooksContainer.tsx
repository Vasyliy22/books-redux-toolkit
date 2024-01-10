import React, { FC, MouseEventHandler } from 'react'
import CountList from '../components/CountList';
import List from '../components/List';
import Loader from '../components/Loader';
import ListItem from '../components/ListItem';
import Volume from '../components/Volume';
import ButtonMore from '../components/ButtonMore';
import { BookType } from '../types';
import { useNavigate } from 'react-router';

type Props = {
  handleLoadMore: () => void,
  booksList: BookType[],
  loading: boolean,
  loadingMore: boolean,
}

const BooksContainer: FC<Props> = ({ booksList, loading, loadingMore, handleLoadMore }) => {
  const navigate = useNavigate();

  const handleClick: (index: number) => MouseEventHandler<HTMLDivElement> = (index) => () => {
    navigate(String(index + 1));
  };

  return (
    <>
      <CountList>{booksList.length}</CountList>
        {loading ? <Loader /> : (
          <>
            <List>
              {booksList.map((book, index) => {
                const { volumeInfo } = book;

                return (
                  <ListItem key={index}>
                    <Volume
                      book={volumeInfo}
                      onClick={handleClick(index)}
                    />
                  </ListItem>
                )})}
            </List>
            <ButtonMore loadMore={handleLoadMore} loadingMore={loadingMore} />
          </>
        )}
      </>
  )
}

export default BooksContainer;