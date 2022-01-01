import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import { toast, Bounce } from "react-toastify";
import { getAllCommentsService } from "./../../services/commentServices";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(null);

  // how to get data?
  // 1. useEffect() => http in fucntional Component
  // 2. CDM(Component Did Mount) => get in class Component

  //? 2XX => ok
  //? 3xx => 301, 302 => redirect => SEO(important)
  //? 4xx => 401: unAuthorized, 402, 403 => notAccess, 404 => notFound
  //? 5xx => serverSide

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllCommentsService();
        setComments(data);
      } catch (error) {
        setError(error);
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          theme: "dark",
        });
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id, e) => {
    setSelectedId(id);
    document.querySelector(".active") &&
      document.querySelector(".active").classList.remove("active");
    e.currentTarget.classList.add("active");
  };

  const renderComments = () => {
    let renderedDataComments = (
      <p style={{ color: "#fff" }}>fetching all comments...</p>
    );

    if (error) {
      renderedDataComments = (
        <div style={{ whiteSpace: "pre-line" }}>
          <p style={{ color: "#fff" }}>fetching comments failed! &#128533;</p>
          <p style={{ color: "#fff" }}>{error.message}</p>
          <button
            className="lemon-btn"
            onClick={() => window.location.reload()}
            style={{ color: "#fff" }}
          >
            try again!
          </button>
        </div>
      );
    } else if (comments && !error) {
      renderedDataComments = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          body={c.body}
          onClick={(e) => selectCommentHandler(c.id, e)}
        />
      ));
    } else {
      renderedDataComments = (
        <p style={{ color: "#fff" }}>There are no comments! &#128533;</p>
      );
    }

    return renderedDataComments;
  };

  return (
    <main>
      <section className="comments">{renderComments()}</section>
      <section className="fullcom">
        <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
