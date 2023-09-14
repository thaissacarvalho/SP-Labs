import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SendContact from "./pages/SendContact";
import NotFound from "./pages/NotPage";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Home />, 
		errorElement:<NotFound />
	},
	{
		path: "/send-contact",
		element: <SendContact />
	}
]);

export default Router;