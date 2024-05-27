import { formatCurrency } from "../utils/helpers"

const MenuList = ({ id, name, unitPrice, ingredients, soldOut, imageUrl }) => {
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
        {
        !soldOut ? 
          <p>{formatCurrency(unitPrice)}</p>
        : <p>soldOut</p>
        }
        </div>
      </div>
    </li>
  )
}
export default MenuList