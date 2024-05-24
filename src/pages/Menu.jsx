import { useLoaderData } from "react-router-dom";
import { getMenu } from "../utils/apiRestaurant";
import SingleItemMenu from "../components/SingleItemMenu";

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
            <li key={item.id}>{item.name}</li>
          )
        })
      }
    </ul>
  )
}
export default Menu