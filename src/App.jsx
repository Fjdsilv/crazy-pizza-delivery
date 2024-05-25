import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Menu,
  Cart,
  Order,
  Error,
} from "./pages";

import { loader as menuLoader } from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <Order />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App