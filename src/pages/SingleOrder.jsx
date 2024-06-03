import { useLoaderData } from "react-router-dom";
import { getOrder } from "../utils/apiRestaurant";

export const loader = async ({ params }) => {
  const id = params.orderId;
  const order = await getOrder(id);
  console.log(order);
  return order
}

const SingleOrder = () => {
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = useLoaderData();
  return (
    <div>
      <h2>Status</h2>
      
    </div>
  )
}
export default SingleOrder