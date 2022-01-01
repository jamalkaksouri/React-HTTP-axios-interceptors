import "./App.css";
import Discussion from "./container/Discussion/Discussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DiscussionClassComponent from "./container/Discussion/DiscussionClassComponent";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
