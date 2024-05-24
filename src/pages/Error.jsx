import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => { 
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error.message);

  if (error.status === 404) {
    return (
      <div>
      <h2>ERROR 404</h2>
      <button onClick={() => navigate(-1)}>
        Go to Back
      </button>
    </div>
    )
  }

  return (
    <div>
      {/* <h2>{error.data || error.message}</h2> */}
      {/* <h2>{error.message}</h2> */}
      <h2>Something went wrong...</h2>
      <button onClick={() => navigate(-1)}>
        Go to Back
      </button>
    </div>
  )
}
export default Error