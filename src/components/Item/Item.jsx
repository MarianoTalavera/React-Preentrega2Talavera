import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Té {nombre} </h3>
        <p>Precio x 100 gr: $ {precio.toFixed(2)} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`}> Más info </Link>
    </div>
  )
}

export default Item