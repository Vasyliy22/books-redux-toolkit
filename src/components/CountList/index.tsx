import { FC } from 'react';
import './styles.scss';

type Props = {
  children: number,
}

const CountList: FC<Props> = ({ children }) => <p className='count-list'>Found {children} results</p>

export default CountList;
