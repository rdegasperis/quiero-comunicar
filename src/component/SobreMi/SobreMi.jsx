import React from 'react';
import imgs from '../imgs/imgs';
import s from '../styles/SobreMi.module.css'



function SobreMi(){
    return (
        <div className={s.cont}>
        <div className={s.logo}>
            <img className={s.foto} src={imgs.fotoNoe} alt="Noelia Paniego"/>
                </div>  
        <div className={s.contenedor}>
         <p className={s.texto1}>¡Hola!</p>
         <p className={s.texto2}>Mi nombre es Noelia Paola Paniego, Noe. </p>
         <p className={s.texto3}>Nací en Posadas, Misiones y a los 17 años con el apoyo de mi familia me fui a La Plata a estudiar.
         Me recibí, trabajo y sigo formándome continuamente.
         Hoy puedo decir que soy Licenciada y Profesora en Comunicación Social, Locutora Nacional y casi Magister en Comunicación Digital Interactiva (si todo va bien, eliminamos el casi).</p>
        <button className={s.boton}>Accedé a mi CV</button>
        </div>
        </div>
    )
}

export default SobreMi;