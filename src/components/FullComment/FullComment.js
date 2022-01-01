import "./fullComment.css";
import { useEffect, useState } from "react";
import {
  getAllCommentsService,
  deleteCommentService,
  getSinlgeCommentService,
} from "../../services/commentServices";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (commentId) {
      const getFullCommentData = async () => {
        try {
          comment &&
            document.querySelector(".fullComment").classList.add("bluray");

          const { data } = await getSinlgeCommentService(commentId);

          comment &&
            document.querySelector(".fullComment").classList.remove("bluray");
          setComment(data);
        } catch (error) {
          console.log(error);
          comment &&
            document.querySelector(".fullComment").classList.add("bluray");
        }
      };
      getFullCommentData();
    }
  }, [commentId]);

  const deleteHandler = () => {
    const deleteData = async () => {
      try {
        comment &&
          document.querySelector(".fullComment").classList.add("bluray");

        await deleteCommentService(commentId);
        const { data } = await getAllCommentsService();

        if (data.length === 0) {
          setComments(null);
          setSelectedId(null);
          setComment(null);
        } else {
          setComments(data);
          setSelectedId(null);
          setComment(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  };

  let commentDetail = <p style={{ padding: "10px", color: "#fff" }}></p>;

  if (commentId)
    commentDetail = (
      <p style={{ padding: "10px", color: "#fff" }}>Loading...</p>
    );

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <span className="wait">please wait...</span>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button className="btn-cancel" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
