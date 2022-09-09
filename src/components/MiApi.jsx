import React, {useState, useEffect} from 'react';

export const MiApi = () => {

const [listaFeriado, setListaFeriado] = useState([]);

const [busqueda, setBusqueda] = useState("");

useEffect(() => {
consultarInformacion();
}, []);

const consultarInformacion = async () => {
    const url = "https://api.victorsanmartin.com/feriados/en.json";

    const response = await fetch(url)
    const {data} = await response.json()

    setListaFeriado(data.sort());
    }

    
    const validarBusqueda = (e)=>{
     setBusqueda(e.target.value) 
    } 

    return (
    <div className='container'>  
    <form onSubmit="">
    <input type="text" name="busqueda" className='inp' placeholder='Busqueda' value={busqueda} onChange={validarBusqueda}/>  
    </form> 

    <div className='container2'>
    {listaFeriado.filter((e) => {
    if ( busqueda === ""){
      return e;
    } else if (e.title.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
      return e; 
    } else if (e.type.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
      return e; } 
    }
    ).map((e) =>(
      <div className='card' key={e.date}>
      <p>Fecha: {e.date}</p>
      <p>Nombre: {e.title}</p>
      <p>Tipo: {e.type}</p>
      </div>)
   )}  
    </div>
    </div>   
  );
}
export default MiApi;