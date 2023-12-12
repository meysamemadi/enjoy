'use client'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logoAnimation from "@/public/logo.json";


const LottieAnimation = () => {
  

  return (
    <Player
      autoplay
      loop
      src={logoAnimation}
      style={{ height: "100%", width: "100%" }}
    >
    </Player>
  );
};

export default LottieAnimation;
