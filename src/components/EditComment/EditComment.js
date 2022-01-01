import { useState, useEffect } from "react";
import "./editComment.css";
import {
  editCommentService,
  getAllCommentsService,
  getSinlgeCommentService,
} from "../../services/commentServices";

const EditComment = ({ setComments, commentId }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    if (commentId) {
      const getData = async () => {
        const { data } = await getSinlgeCommentService(commentId);
        setComment(data);
        document.querySelector(".editComment").classList.remove("bluray");
      };
      getData();
    } else {
      setComment({
        name: "",
        email: "",
        body: "",
      });
    }
  }, [commentId]);

  const changeHandler = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const commentHandler = async () => {
    try {
      document.querySelector(".editComment").classList.add("bluray");

      if (!commentId) {
        document.querySelector(".editComment").classList.add("bluray");

        document.querySelector("#waitingEdit").innerHTML =
          "Please select a comment";

        return;
      } else {
        await editCommentService(commentId, comment);
        const { data } = await getAllCommentsService();
        setComments(data);
      }

      document.querySelector(".editComment").classList.remove("bluray");
    } catch (error) {
      console.log(error);
      document.querySelector(".editComment").classList.add("bluray");
    }
  };

  return (
    <div className={`editComment ${!commentId && " disableEdit"}`}>
      <span id="waitingEdit" className="wait">
        please wait...
      </span>
      <h2>Edit comment</h2>
      <div className="formControl">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={comment.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={comment.email}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>body</label>
        <input
          type="textarea"
          name="body"
          value={comment.body}
          onChange={changeHandler}
        />
      </div>
      <button id="btnAdd" onClick={commentHandler}>
        Edit Commnet
      </button>
    </div>
  );
};

export default EditComment;
