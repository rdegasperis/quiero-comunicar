import React, {useState, useEffect} from 'react';
import s from '../styles/Plan.module.css';
import c from "./cuestionario";
import Conclusion from './Conclusion'

function Plan (){

    const [select, setSelect] = useState("");
    const [orden, setOrden] = useState("primero");
    const seleccion = (primer) => {
        if (primer === "Institución") return (setSelect("inst"), setOrden("segundo"))
        if (primer === "Comercio") return (setSelect("com"), setOrden("segundo"))
        if (primer === "Profesional") return (setSelect("prof"), setOrden("segundo"))
        
    }
    const orderSetter = (order) => setOrden(order)
    useEffect(() => {
        setOrden("primero");
      }, []);

return <div>
        {orden === "primero" && <>
    <p className ={s.text}>¿Qué sos?</p>
        <div>{c.primero.map(inst =>
            <>
            <button className ={s.boton} onClick = {() => seleccion(inst)}>{inst}</button>
            </>
        )}</div>
        </>}

        {orden === "segundo" &&
        <>
    <p className ={s.text}>Si estás acá, queres estar en la nube. Pero, ¿Cuál es tu objetivo? </p>
        <p className ={s.text2}>Elegí la opción que creas más conveniente</p>
        {(select) &&
        <div>{c.segundo[select].map(obj =>
            <>
            <button className ={s.boton} onClick = {() => orderSetter("tercero")}>{obj}</button>
            </>
            )}</div>
        
        }</>}

        {orden === "tercero" && <>
    <p className ={s.text} >¿A quién le vas a hablar?</p>
        {(select)&&
        <div>{c.tercero[select].map(hablar =>
            <>
            <button className ={s.boton} onClick = {() => orderSetter("cuarto")}>{hablar}</button>
            </>
            )}</div>
        }</>}

        {orden === "cuarto" && <>
    <p className ={s.text}>¿Contás con un equipo a quién delegar actividades?</p>
        {(select)&&
        <div>{c.cuarto[select].map(delegar =>
            <>
            <button className ={s.boton} onClick = {() => orderSetter("quinto")}>{delegar}</button>
            </>
            )}</div>
        }</>}

        {orden === "quinto" && select === "inst" && <>
    <p className ={s.text}>¿Te manejas con fluidez en la nube?</p>
        {(select)&&
        <div>{c.quinto[select].map(nube =>
            <>
            <button className ={s.boton} onClick = {() => orderSetter("sexto")}>{nube}</button>
            </>
            )}</div>
        }</>}

        {orden === "sexto" && select === "inst" && <>
    <p className ={s.text}>¿Tenés miedo al impacto de internet? Ya sea positivo o negativo</p>
        {(select)&&
        <div>{c.sexto[select].map(impacto =>
            <>
            <button className ={s.boton} onClick = {() => orderSetter("septimo")}>{impacto}</button>
            </>
            )}</div>
        }</>}

        {orden === "septimo" && select === "inst" && <>
    <p className ={s.text}>Estar en Internet y ser "digital" ¿Qué siginifica para vos?</p>
        {(select)&&
        <div>{c.septimo[select].map(digital =>
            <>
            <button className ={s.boton2} onClick = {() => orderSetter("octavo")}>{digital}</button>
            </>
            )}</div>
        } </>}

        {orden === "octavo" && select === "inst" && <>
    <p className ={s.text}>¿Estás dispuesto a invertir en un plan estratégico de comunicación?</p>
        {(select)&&
        <div>{c.octavo[select].map(invertir =>
            <>
            <button className ={s.boton3} onClick = {() => orderSetter("noveno")}>{invertir}</button>
            </>
            )}</div>
        }</>}

        {orden === "noveno" && select === "inst" && <Conclusion/>}
</div>
};

export default Plan;