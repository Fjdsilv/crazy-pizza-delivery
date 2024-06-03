import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

const Header = () => {
  return (
    <header className="navbar bg-accent">
      <div className="container mx-auto">
        <nav className="w-full flex justify-between items-center py-4">
          <h1 className="text-5xl font-bold text-base-100"><Link to='/'>🍕Crazy Pizza</Link></h1>
          <div>
            <SearchOrder />
          </div>
          <div>
            John
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header


