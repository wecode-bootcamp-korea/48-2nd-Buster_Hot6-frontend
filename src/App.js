import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/store', element: <Store /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
