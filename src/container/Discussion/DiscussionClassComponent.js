import { Component } from "react";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";

class DiscussionClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: null };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ comments: response.data.slice(0, 4) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <main>
        <section>
          {this.state.comments ? (
            this.state.comments.map((c) => (
              <Comment key={c.id} name={c.name} email={c.email} body={c.body} />
            ))
          ) : (
            <p>loading</p>
          )}
        </section>
        <section>
          <FullComment />
        </section>
        <section>
          <NewComment />
        </section>
      </main>
    );
  }
}

export default DiscussionClassComponent;
