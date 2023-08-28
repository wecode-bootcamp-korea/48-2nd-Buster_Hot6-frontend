import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      // { path: 'categories/:id', element: <Categories /> },
      { path: '/cart', element: <Cart /> },

      { path: '/store', element: <Store /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
