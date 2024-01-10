import './styles.scss';
import Spinner from './Spinner';

const Loader = () => {
  return (
    <div className='loader'>
      <div className="loader__spinner">
        <Spinner />
      </div>
    </div>
  )
}

export default Loader;
