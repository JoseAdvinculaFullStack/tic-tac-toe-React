import "./App.css";
import Game from "./routes/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CPU from "./routes/CPU";
import MultiPlayer from "./routes/MultiPlayer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/CPU",
    element: <CPU />,
  },
  {
    path: "/MultiPlayer",
    element: <MultiPlayer />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
