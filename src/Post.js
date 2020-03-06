import React, {Component} from 'react';
import './App.css';

let elems = {
    header: 'Dinos be dinoin',
    author: 'Richard Scary',
    content: 'THIS IS A POST ABOUT DINOS LISTEN UP PEOPLE'
}

let commentStuff = [
    {
      commentHeader: "Rawr",
      commentBody: "Dinobama says hi!"
    },
    {
      commentHeader: "Radasaurus",
      commentBody: "RAWRAWRRAWR"
    }
  ];

class Header extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.author}</h3>
            </div>
        )
    }
}



class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.content
    }
    this.changeContent = this.changeContent.bind(this)
  }
  changeContent(e) {
    // render alert on click
    let answer = prompt("What would you like to update body to?")
    // update state
    this.setState((prevState, props) => {
      return {
        body: answer
      }
    })
  }

    render () {
        return (
          <div>
            <p>{this.state.body}</p>
            <button onClick={this.changeContent}>Click to Edit</button>
          </div>
        )
    }
}

  
  class Comment extends Component {
    render() {
      return (
        <div>
          <h3>{this.props.commentHeader}</h3>
          <p>{this.props.commentBody}</p>
        </div>
      );
    }
  }
  
  class Commentpost extends Component {
    render() {
      let comments = [];
      commentStuff.forEach(function(comment, index) {
        comments.push(
          <Comment
            commentHeader={comment.commentHeader}
            commentBody={comment.commentBody}
          />
        );
      });
  
      return <div>{comments}</div>;
    }
  }

  function Post() {
      return (
          <div>
              <Header header={elems.header} author={elems.author} />
              <Content content={elems.content} />
              <Commentpost />
          </div>
      )
  }

  export default Post;