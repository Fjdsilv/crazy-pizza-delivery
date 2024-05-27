import { useLoaderData, Link } from "react-router-dom";
import { getMenu } from "../utils/apiRestaurant";
import MenuList from "../components/MenuList";

// Each route can define a "loader" function to provide data to the route element before(pre-fetcher) it renders.
// must return something even "null" otherwise error
export const loader = async () => {
    const menu = await getMenu();
    return menu
}

const Menu = () => {
    const menu = useLoaderData();

  return (
    <ul>
      {
        menu.map(item => {
          return (
            // <li key={item.id}>{item.name}</li>
            <MenuList key={item.id} {...item} />
          )
        })
      }
      <div>
      <Link to='/'>Landing Page</Link>
      </div>
    </ul>
  )
}
export default Menu