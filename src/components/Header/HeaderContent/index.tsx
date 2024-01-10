import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement[],
}

const HeaderContent: FC<Props> = ({ children }) => {
  return (
    <div className='header__content'>{children}</div>
  )
}

export default HeaderContent;