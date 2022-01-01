import "./comment.css";

const Comment = ({ name, email, body, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default Comment;
