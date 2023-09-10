import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
  return (
    
    <TailSpin
      height="40"
      width="40"
      color="orange"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    
  );
};
export default LoaderComp;
