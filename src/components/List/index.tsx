import React, { ReactElement, FC } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[];
}

const List: FC<Props> = ({ children }) => <ul className='list'>{children}</ul>

export default List;
