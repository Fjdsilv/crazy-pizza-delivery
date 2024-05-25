import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
        <p>
            <span>23 Pizzas</span>
            <span>$30.00</span>
        </p>
        <Link to='/cart'>Open Cart</Link>
    </div>
  )
}
export default CartOverview