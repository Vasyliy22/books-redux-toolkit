import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement,
}

const Content: FC<Props> = ({ children }) => <div className='content'>{children}</div>

export default Content;
