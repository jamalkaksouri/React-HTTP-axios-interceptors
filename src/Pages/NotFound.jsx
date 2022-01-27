import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <img src="/notfounderror.jpg" className="img_notfound" alt="not found!" />
      <span className="btn_back"></span>
      <Link> className="backlink btn" to="/"> back to home page</Link>
    </div>
  );
};

export default NotFound;
