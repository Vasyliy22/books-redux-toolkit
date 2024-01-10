import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement,
}

const HeaderButton: FC<Props> = ({ children }) => {
  return (
    <div className='header__button'>{children}</div>
  )
}

export default HeaderButton;
