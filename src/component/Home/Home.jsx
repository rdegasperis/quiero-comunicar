import React from 'react';
import s from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <div className={s.contenedor}>
            <p className={s.texto}> “Si no estás en Internet, no existis”. </p> 
            <p className={s.texto1}> ¡Qué presión! </p>
            <p className={s.texto2}> Pero sabes qué, ¡No desesperes!. Accedé gratuitamente a un formulario, contestá las preguntas y obtené un breve plan de comunicación digital. </p>
            <p className={s.texto3}>¡No te quedes afuera de internet!</p>
            <div className={s.contBoton}><Link  type='button' to='/quiero-comunicar/Plan/'><button className={s.boton} >Quiero comunicar, quiero mi plan</button></Link></div>
            <p className={s.texto4}>¡No olvides! Para un mejor resultado, se requiere un plan a medida, para eso, asesorate con un profesional del área.</p>
        </div>
    )
}

export default HomePage;