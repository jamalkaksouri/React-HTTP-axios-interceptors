import "./comment.css";

const Comment = ({ name, email, content, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Content: {content}</p>
    </div>
  );
};

export default Comment;
