import { useNavigation, Link } from "react-router-dom"

const Landing = () => {
    const navigation = useNavigation();
    // console.log(navigation);
  return (
    <div>
    Landing
    <Link to='/menu'>menu</Link>
    </div>
  )
}
export default Landing