import { Form } from "react-router-dom";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return null  
}


const CreateOrder = () => {
  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="post">
          <div>
            <label>First Name</label>
            <input 
              type="text"
              name="customer"
              required 
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input 
              type="tel"
              name="phone"
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input 
              type="text"
              name="address"
              required 
            />
          </div>
          <div>
            <input 
              type="checkbox"
              name="priority" 
              id="priority"
            />
            <label htmlFor="priority">Want to yo give your order priority?</label>
          </div>
      </Form>
    </div>
  )
}
export default CreateOrder