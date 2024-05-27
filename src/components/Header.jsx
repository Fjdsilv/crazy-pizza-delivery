import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbar bg-accent">
      <div className="container mx-auto">
        <nav className="w-full flex justify-between items-center py-4">
          <h1 className="text-5xl font-bold text-base-100"><Link to='/'>🍕Crazy Pizza</Link></h1>
          <input 
            className="input input-bordered input-primary rounded-full w-full max-w-xs" 
            type="text" 
            placeholder="Type here" 
            />
          <div>
            John
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header


