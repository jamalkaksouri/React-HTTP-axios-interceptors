import Home from "./Pages/Home";
import NewCommentPage from "./Pages/NewCommentPage";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/new-comment", element: <NewCommentPage /> },
  { element: <NotFound /> },
];

export default routes;
