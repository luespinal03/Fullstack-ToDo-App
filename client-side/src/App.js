import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage'
import './App.css';


const urlEndpoint = process.env

function App() {

  // here we are creating the different routes the user is going to use to reach different information when the user types in the path, the element is where it would take the user to.
  const router = createBrowserRouter([

    // this path takes us to the home page and shows us the stuff inside the <Navlayout/> component
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          // index is true in order to make it default element that displays for the path?
          index: true,
          element: <HomePage />
        },
        // path below takes us to the Movie list section and renders the stuff inside <MovieLayout/> component as we pass the list of movies (movieList) as a prop into <MovieLayout/> component
        {

        }
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
