import React from 'react';
import banderachilena from './imgs/banderachilena.jpg';

export const Header = () => {
  return (
    <div className='head'>
    <h2>Feriados en Chile</h2>
    <img src={banderachilena} alt="Bandera" className='img'/>
    </div>
  );
}
export default Header;




