import React from 'react';

class ProductItem extends React.Component {
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

  renderNewWindowIcon() {
    return (
      <a className="product-item-link" href={this.props.link}>
        <span>
          <i className="fa fa-external-link"></i>
        </span>
      </a>
    );
  }

  renderinfoSession() {
    return (
      <section className="product-item-info">
        <a href="#">
          <h2>{this.props.name}</h2>
        </a>
        <p>{this.props.description}</p>
        <a href="#">
          <img className="small-avatar" src={this.props.maker.avatar} />
        </a>
      </section>
    );
  }
  render() {
    return (
      <li className="product-item">
        {this.renderUpvoteButton()}
        <img className="product-item-media" src={this.props.media} />
        {this.renderinfoSession()}
        {this.renderNewWindowIcon()}
      </li>
    );
  }
}

export default ProductItem;
