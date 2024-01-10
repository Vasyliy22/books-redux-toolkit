import { FC } from 'react';
import './styles.scss';
import Spinner from '../Loader/Spinner';

type Props = {
  loadMore: () => void,
  loadingMore: boolean,
}

const ButtonMore: FC<Props> = ({ loadMore, loadingMore }) => (
  loadingMore
    ? < Spinner />
    : <button className="more" onClick={loadMore}>Load more</button>
  )


export default ButtonMore;
