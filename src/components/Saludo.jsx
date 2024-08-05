
function Saludo(props){
    const saludo = "Hola Talento Tech"
    const saludoProps = props.mensaje
    return(
        <>
        <h1>{saludo}</h1>
        <h2>{ saludoProps }</h2>
        <h3>{ props.mensaje }</h3>
        </>
    )
}

export default Saludo