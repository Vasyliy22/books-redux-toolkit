import { ChangeEventHandler, FC } from 'react';
import './styles.scss';

type Props = {
  onFilter: ChangeEventHandler<HTMLSelectElement>,
}

const Filter: FC<Props> = ({ onFilter }) => {
  return (
    <select id='for' name="filter" className="filter" onChange={onFilter}>
      <option value="all">all</option>
        <option value="Arts">Arts</option>
        <option value="Biography">Biography</option>
        <option value="Computers">Computers</option>
        <option value="History">History</option>
        <option value="Medical">Medical</option>
        <option value="Poetry">Poetry</option>
        <option value="Philosophy">Philosophy</option>
    </select>
  )
}

export default Filter;
