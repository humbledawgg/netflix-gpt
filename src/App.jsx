
import './App.css'
import Body from './components/Body'
import Browse from './components/Browse'
import {createBrowserRouter, RouterProvider} from "react-router"

function App() {

  const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <Body />
    },
    {
      path:"/browse",
      element: <Browse />
    }
])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
