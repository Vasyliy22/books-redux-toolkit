import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      height={30}
      width={30}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}

export default Spinner;