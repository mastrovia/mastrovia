import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const LottiePlayer = ({ src }: { src?: string }) => {
    return <DotLottieReact
        src={src || "/lottie/website_hosting.lottie"}
        autoplay
        loop
        className="max-w-md w-full aspect-square"
    />
};

export default LottiePlayer;
