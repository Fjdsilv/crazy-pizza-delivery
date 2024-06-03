import { useLoaderData } from "react-router-dom";
import { getOrder } from "../utils/apiRestaurant";

export const loader = async ({ params }) => {
  const id = params.orderId;
  const order = await getOrder(id)
  console.log(order)

  return null
}

const SingleOrder = () => {
  useLoaderData();
  return (
    <div>SingleOrder</div>
  )
}
export default SingleOrder