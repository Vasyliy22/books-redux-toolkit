import { ReactElement, FC } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement,
}

const ListItem: FC<Props> = ({ children }) => <li className='list__item'>{children}</li>

export default ListItem;