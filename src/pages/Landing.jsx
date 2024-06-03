import { useNavigation, Link } from "react-router-dom"

const Landing = () => {
    const navigation = useNavigation();
    // console.log(navigation);
  return (
    <div>
      <div>
        <h2>The best Pizza the World!</h2>
        <p>Pizza: It's delicious. It brings people together. Everyone love Pizza!</p>
        <div>
          <p>Welcome! Please start by telling us your name:</p>
          <div>
            <input type="text" placeholder="Your full name" />
            <button>Start Order</button>
          </div>
        </div>
      </div>
      <div>
        <Link to='/menu'>menu</Link>
      </div>
    </div>
  )
}
export default Landing