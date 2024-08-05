
function Card(){
    return(
        <div className="card" style={{width: '10rem;'}} >
        <img src={ props.articulo.imagen } className="card-img-top" alt="..." width={50} />
        <div className="card-body">
            <h5 className="card-title">{ props.articulo.nombre }</h5>
            <p className="card-text">{ props.articulo.descripcion }</p>
            <h2>$ { props.articulo.precio }</h2>
            {(props.articulo.disponible) ? (<h5>Disponible</h5>) : (<h2>No Disponible</h2>)  }
            {/* {(props.articulo.disponible) ? "" : "disabled" } */}
            <button href="#" className="btn btn-primary" disabled={(!props.articulo.disponible)}>Comprar</button>
        </div>
        </div>
    )
}

export default Card