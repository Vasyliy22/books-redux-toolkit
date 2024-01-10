import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement[],
}

const HeaderList: FC<Props> = ({ children }) => {
  return (
    <ul className='header__list'>{children}</ul>
  )
}

export default HeaderList;
