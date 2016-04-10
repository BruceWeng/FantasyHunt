import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          name: "Ashley",
          avatar: "/img/ashley.jpeg",
          content: "I love this product"
        },
        {
          name: "Bruce",
          avatar: "/img/profile.jpg",
          content: "Same here"
        },
      ]
    }
  }

  renderUpvoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.props.upvote}
      </a>
    );
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: 'url(' + this.props.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.props.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <sction className="post-comment">
          <img className="medium-avatar" src="/img/ashley.jpeg"/>
          <input placeholder="what do you think of this product?"/>
        </sction>
        {this.renderComments()}
      </section>
    );
  }

  renderBody() {
    return (
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  renderComments() {
    return (
      <ul className="comment-list">
        {
          this.state.comments.map(function(comment, idx) {
            return (
              <li key={idx}>
                <img className="medium-avatar" src={comment.avatar}/>
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            );
          })
        }
      </ul>
    )
  }
  render() {
    return (
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }
}

export default ProductPopup;
