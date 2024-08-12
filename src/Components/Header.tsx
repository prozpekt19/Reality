import React,{useState} from "react";
import './Header.css'
import myVideo from '../assets/grad.mp4';
import Image from '../assets/gucci.jpg';
import Image1 from '../assets/box.jpg';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

type HeaderProps = {
    title : string;
    subtitle? : string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
      <header className="header">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <nav>
        </nav>
      </header>
    );
  };

  const MainContent: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => {
      navigate('/home');
      }, 2000);
    };

    return (
      <>
           <div className="img1">
            <img src={Image1} alt={"Img1"}/>
       </div>
        <div className="video-container">
          <video autoPlay muted loop id="video">
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
        <div className="backbox">
        <div className="box">
            <p>Sign Up</p>
        </div>
        {isLoading ? (
        <MoonLoader className="load" color="red" loading={isLoading} size={35} />
           ) : (
        <button className="signin" onClick={handleClick}>
        <svg
        viewBox="0 0 256 262"
        preserveAspectRatio="xMidYMid"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
        ></path>
        <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
        ></path>
        <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
        ></path>
        <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
        ></path>
        </svg>
        Sign in with Google
        </button>
      )}
        </div>
        <Header title="REALITY." subtitle="The Next-Gen Shopping Destination" />
        <header className="copyright">
          <h1>ⓒ 2024 Prozpekt</h1>
        </header>
        <div className="img">
            <img src={Image} alt={"Img"}/>
       </div>
        <button className="btn">
        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>
        <span className="text">Powered by AI</span>
        </button>
      </>
    );
};
export default MainContent;
