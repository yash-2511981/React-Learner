import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout';
import Error from './component/Error'
import Home from './component/Home'
import IntroductionPage from './component/IntroductionPage';

function App() {
  const paths = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <IntroductionPage />
        },

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={paths} />
    </>
  );
}

export default App;
