import "./App.css";
import Game from "./routes/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CPU from "./routes/CPU";
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
    element: <h1>multiPlayer</h1>,
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Game />
      </div>
    </RouterProvider>
  );
}

export default App;
