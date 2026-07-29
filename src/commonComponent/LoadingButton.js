import { TailSpin } from 'react-loader-spinner';

const LoadingButton = () => {
    return (
        <div className="inline-flex items-center justify-center">
            <TailSpin
                height="20"
                width="20"
                color="currentColor"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true}
            />
        </div>
    );
};

export default LoadingButton;