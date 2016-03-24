import React from 'react';

class ProductItem extends React.Component {
  render() {
    return (
      <li className="product-item">
        <a className="upvote-button" href="#">
          <span>
            <i className="fa fa-sort-asc"></i>
          </span>
          {this.props.upvote}
        </a>
        <img className="product-item-media" src={this.props.media} />
        <section className="product-item-info">
          <a href="#">
            <h2>{this.props.name}</h2>
          </a>
          <p>{this.props.description}</p>
          <a href="#">
            <img className="small-avatar" src={this.props.maker.avatar} />
          </a>
        </section>
        <a className="product-item-link" href={this.props.link}>
          <span>
            <i className="fa fa-external-link"></i>
          </span>
        </a>
      </li>
    );
  }
}

export default ProductItem;
