import React from "react";
import './Header.css'

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
    return (
      <>
        <div className="backbox">
        <div className="box">
            <p>Sign Up</p>
        </div>
        </div>
        <Header title="REALITY." subtitle="The Next-Gen Shopping Destination" />
      </>
    );
};
export default MainContent;
