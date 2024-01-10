import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[],
}

const HeaderItem: FC<Props> = ({ children }) => {
  return (
    <li className='header__item'>{children}</li>
  )
}

export default HeaderItem