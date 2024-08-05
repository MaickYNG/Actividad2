function Eventos(){

    const handlePresioname = () => {
        //codigo
        console.log("Boton Presionado")
    }

    const handleDigitar = (e) =>{
        console.log(e.target.value)
    }

    return(
        <>
        <button onClick={ handlePresioname } > Presioname </button>
        <input  onChange={ handleDigitar }  type="text" ></input>
        </>
    )
}
export default Eventos