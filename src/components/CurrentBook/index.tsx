import './styles.scss';
import { BookType } from '../../types';
import { FC } from 'react';

type Props = {
  book: BookType | null,
}

const CurrentBook: FC<Props> = ({ book }) => {
  return (
    <div className="current-book">
      <div className="current-book__block">
        <img
          src={book?.volumeInfo.imageLinks.thumbnail}
          alt='title'
          className="current-book__image"
        />
      </div>
      
      <div className="current-book__content">
        <p className="current-book__title">{book?.volumeInfo.title}</p>
        <p className="current-book__categories">{book?.volumeInfo.categories}</p>
        <p className="current-book__authors">{book?.volumeInfo.authors}</p>
        <p
        className="current-book__description">
          {!book?.volumeInfo.description
            ? 'Not description'
            : book?.volumeInfo.description
          }
        </p>
      </div>
    </div>
  )
}

export default CurrentBook;
