import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Store from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Orders from './pages/Orders/Orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/store/:id', element: <ProductDetail /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
