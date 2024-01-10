import { FC } from 'react';
import './styles.scss';

type Props = {
  title: string,
}

const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className='header__title'>{title}</h1>
  )
}

export default Title;
