import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='contenedorItem'>
        <h2>Té {nombre} </h2>
        <h3>Precio x 100 gr: $ {precio} </h3>
        <h5>ID: {id} </h5>
        <p>Descripción: {descripcion}</p>
        <img src= {img} alt={nombre} />
        <br />
        <br />
    </div>
  )
}

export default ItemDetail