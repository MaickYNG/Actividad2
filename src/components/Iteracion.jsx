function Iteracion(){
    const numeros = [1,2,3,4,5]
    console.log("Hola Talento Tech", 50)
    // numeros.map((x)=>{ console.log(x)  })
    // const listItems = numeros.map((number)=>
    //     <li key={ number }>{ number }</li> 
    // )
    return(<>
        <h3  >Iterando</h3>
        {/* { listItems } */}
        {numeros.map((number)=>(
            <li >{ number }</li>
        )) }
        </>)

}

export default Iteracion