import { FC } from 'react';
import './styles.scss';

type Props = {
  value: string,
}

const Label: FC<Props> = ({  value }) => {
  return (
    <label htmlFor='for' className='label'>{value}</label>
  )
}

export default Label;