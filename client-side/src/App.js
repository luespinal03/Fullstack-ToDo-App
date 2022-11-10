import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage'
import './App.css';
import { useState, useEffect } from 'react';
import ToDoFormPage from './Pages/ToDoFormPage';


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

function App() {

  const [toDoList, setToDoList] = useState([]);
  // this refetch state is used to re-render the page when we delete one item, update and item or edit. It is being passed into <HomePage/> which is then passed into <ToDoCard/> as a prop. Also being passed into <TodoFormPage/> for it to be used in the function in charge of creating a new todo. That way when we create a new todo item the whole page re-renders as well. 
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const findBlog = async () => {
      const result = await fetch(`${urlEndpoint}/todos/all`)
      const fetchedTodos = await result.json()
      console.log(fetchedTodos)
      setToDoList(fetchedTodos.todo)
    }
    findBlog()
  }, [refetch])




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
          element: <HomePage toDoList={toDoList} urlEndpoint={urlEndpoint} refetch={setRefetch} />
        },
        // path below takes us to the Movie list section and renders the stuff inside <MovieLayout/> component as we pass the list of movies (movieList) as a prop into <MovieLayout/> component
        {
          path: "/todo-form",
          element: <ToDoFormPage urlEndpoint={urlEndpoint} refetch={setRefetch} />

        }
      ]
    },
  ]);

  return (
    <header className='App-header'>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </header>
  );
}

export default App;
