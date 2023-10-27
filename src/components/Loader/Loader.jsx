import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="30"
      width="30"
      ariaLabel="TailSpin -loading"
      wrapperStyle={{}}
      wrapperClass="TailSpin -wrapper"
    />
  );
};

export default Loader;
