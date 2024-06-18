import CreateAOrder from "../components/CreateAOrder";

import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  return null  
}

// CreateOrder <- Exchange Page name
const Order = () => {
  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="post">

      </Form>
    </div>
  )
}
export default Order