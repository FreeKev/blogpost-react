import React, { Component } from 'react';
import './App.css';
import Author from './Author.js';
import Comment from './Comment.js';
// let objz = {
//   title: "Dinosaurs are Extinct.",
//   author: "Joe Mamma",
//   body: "FBI - body - body",
//   comments: [
//     "FBI? Female Body Inspector?",
//     "No, It's about dinosaurs, genious.",
//     "You can't spell.",
//     "Contractions are bad grammar."
//   ]
// }
// let authors = ['Stealthy Stegosaurus', 'Tiny T-Rex', 'Ivory Iguanodon'];

class Post extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
      return <div>
        <h1 className="Title">{p.title}</h1>
        <Author author={p.author} />
        <p className="Post-intro">
          {p.content}
        </p>
        <h2>Comments</h2>
        {/* {this.props.posts[0].comments[0]} */}
        <Comment comments={p.comments} />
        <br />
        <br />
      </div>
    })
    return (
      <div className="Post">
      <header className="Post-header">
      <h1 className="Post-title">Dino Blog</h1>
      <p className="Post-intro">
        Here we talk about the ancients.
      </p>
      </header>
      {allPosts}
      <hr />
      <p>At this stage rendering all posts & all comments !</p>
      </div>
    );
  }
}

// <h1>{objz.title}</h1>
// <h2>Written by: {objz.author}</h2>
// <Author author={this.props.posts[0].author} />
// // <allAuthors body={this.props.authors[0]} />
// <p>{objz.body}</p>
// <b>Comments:</b>
// <p class="commentz">{objz.comments[0]}</p>
// <p class="commentz">{objz.comments[1]}</p>

export default Post;
