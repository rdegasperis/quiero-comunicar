import React from 'react';
import s from '../styles/Contacto.module.css'



function Contacto(){
    return (
        <div className={s.contenedor}>
            <h1 className={s.titulo}>Contacto</h1>
            <p className={s.texto1}>Lic. Noelia Paniego</p>
            <p className={s.texto2}>Cel.: 221-597-0850</p>
            <p className={s.texto3}>Mail: noepaniego@gmail.com</p>
        </div>
      
    )
}

export default Contacto;