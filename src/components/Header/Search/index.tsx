import { ChangeEventHandler, FC } from 'react';
import './styles.scss';

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>,
};

const Search: FC<Props> = ({ onChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder='Search'
      onChange={onChange}
    />
  )
}

export default Search;
