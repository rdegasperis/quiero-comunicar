import React from 'react';
import imgs from './imgs/imgs';
import s from './styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';



function NavBar(){
    return (
        <div className={s.contenedor}>
            <nav className={s.nav}>
            <div className={s.logo} to='/'>
                    <img className={s.comunicar} src={imgs.comunicar} alt="#QuieroComunicar"/>
                    
                </div>  
            <div className={s.menu}>                    
                <NavLink className={s.texto} to='/quiero-comunicar/'> Inicio </NavLink>                    
                <NavLink className={s.texto} to="/quiero-comunicar/Plan/">Plan</NavLink>                      
                <NavLink className={s.texto} to="/quiero-comunicar/Contacto/">Contacto</NavLink>
                <NavLink className={s.texto} to="/quiero-comunicar/SobreMi/">Sobre Mi</NavLink>
                </div>             
            </nav>
        </div>
    )
}

export default NavBar;