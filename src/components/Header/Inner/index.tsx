import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement[],
}

const HeaderInner: FC<Props> = ({ children }) => {
  return (
    <div className="header__inner">{children}</div>
  )
}

export default HeaderInner;
