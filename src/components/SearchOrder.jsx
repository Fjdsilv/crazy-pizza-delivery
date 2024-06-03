import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!query) {
      // put alert here!
      return
    }
    navigate(`/order/${query}`);
    setQuery("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
            className="input input-bordered input-primary rounded-full w-full max-w-xs" 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search order #" 
            />
    </form>
  )
}
export default SearchOrder