import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://st2.depositphotos.com/3554337/11655/i/950/depositphotos_116554724-stock-photo-green-shopping-cart-icon.jpg";
  
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> 7 </strong>
    </div>
  )
}

export default CartWidget