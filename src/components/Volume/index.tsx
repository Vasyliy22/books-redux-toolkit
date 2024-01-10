import { FC, MouseEventHandler } from 'react';
import './styles.scss';
import { VolumeType } from '../../types';

type Props = {
  book: VolumeType,
  onClick: MouseEventHandler<HTMLDivElement>
}

const Volume: FC<Props> = ({ book, onClick }) => {
  const { title, categories, authors, imageLinks } = book;
  return (
      <div className="volume" onClick={onClick}>
        <img
          src={imageLinks?.smallThumbnail}
          alt={title}
          className="volume__image"
        />
        <div className="volume__description">
          <p className="volume__title">{title}</p>
          <p className="volume__categories">{categories && categories.length ? categories[0] : ''}</p>
          <p className="volume__authors">{authors}</p>
        </div>
      </div>
  )
}

export default Volume;
