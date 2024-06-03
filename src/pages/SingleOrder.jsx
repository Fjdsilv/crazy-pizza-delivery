import { useLoaderData } from "react-router-dom";
import { getOrder } from "../utils/apiRestaurant";

export const loader = async (obj) => {
  console.log(obj)
  return null
}

const SingleOrder = () => {
  useLoaderData();
  return (
    <div>SingleOrder</div>
  )
}
export default SingleOrder