import React from 'react';
import plug from '../assets/plug.png';

const ConnectionLost: React.FC = () => {
  return (
    <>
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'red', color: 'white'}}>
      <h1>Uh Oh Connection Lost ! :( </h1>
      <p style={{fontWeight:'bold'}}>Please check your internet connection.</p>
    </div>
    <div>
    <img src={plug} style={{position:'relative', width:'10rem', alignSelf:'center',justifySelf:'center',marginLeft:'15rem',marginTop:'1rem'}}/>
    </div>
    </>
  );
};

export default ConnectionLost;
