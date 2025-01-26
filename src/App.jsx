import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import WatchMovie from "./components/WatchMovie";
import WatchList from "./components/WatchList";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <WatchMovie />,
    },
    {
      path: "/user/watchlist",
      element: <WatchList />,
    },
  ]);

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
