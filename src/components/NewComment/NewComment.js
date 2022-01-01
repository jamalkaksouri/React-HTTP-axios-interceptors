import { useState } from "react";
import "./newComment.css";
import {
  addNewCommentService,
  getAllCommentsService,
} from "../../services/commentServices";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const commentHandler = async () => {
    try {
      document.querySelector(".newComment").classList.add("bluray");

      await addNewCommentService(comment);
      const { data } = await getAllCommentsService();
      setComments(data);

      document.querySelector(".newComment").classList.remove("bluray");
    } catch (error) {
      console.log(error);
      document.querySelector(".newComment").classList.add("bluray");
    }
  };

  return (
    <div className="newComment">
      <span id="waiting" className="wait">
        please wait...
      </span>
      <h2>Add new comment</h2>
      <div className="formControl">
        <label>Name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>Content</label>
        <input type="textarea" name="content" onChange={changeHandler} />
      </div>
      <button id="btnAdd" onClick={commentHandler}>
        Add Commnet
      </button>
    </div>
  );
};

export default NewComment;
