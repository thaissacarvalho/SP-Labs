import { RouterProvider } from "react-router-dom";
import Router from "./router.jsx";
import "./sass/app.scss";

export default function App() {
  return <RouterProvider router={Router}/>
}
