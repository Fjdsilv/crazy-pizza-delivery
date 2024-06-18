import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Menu,
  Cart,
  CreateOrder,
  SingleOrder,
  Error,
} from "./pages";

import { loader as menuLoader } from "./pages/Menu";
import { loader as singleOrderLoader } from "./pages/SingleOrder";
import { action as createOrderAction } from "./pages/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        // errorElement: <Error />, TO DELETE
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
        path: "/order",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <SingleOrder />,
        errorElement: <Error />,
        loader: singleOrderLoader,
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