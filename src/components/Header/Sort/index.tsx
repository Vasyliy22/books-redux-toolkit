import { ChangeEventHandler, FC } from 'react';
import './styles.scss';

type Props = {
  onSort: ChangeEventHandler<HTMLSelectElement>,
}

const Sort: FC<Props> = ({ onSort }) => {
  return (
    <select id='for' name="sort" className="sort" onChange={onSort}>
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
  )
}

export default Sort;
