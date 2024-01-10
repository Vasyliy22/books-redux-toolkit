import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement,
}

const Main: FC<Props> = ({ children }) => <main className='main'>{children}</main>

export default Main;
