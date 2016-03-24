import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="product-list">
        <li className="product-item">
          <a className="upvote-button" href="#">
            <span>
              <i className="fa fa-sort-asc"></i>
            </span>
            {this.props.productList[0].upvote}
          </a>
          <img className="product-item-media" src={this.props.productList[0].media} />
          <section className="product-item-info">
            <a href="#">
              <h2>{this.props.productList[0].name}</h2>
            </a>
            <p>{this.props.productList[0].description}</p>
            <a href="#">
              <img className="small-avatar" src={this.props.productList[0].maker.avatar} />
            </a>
          </section>
          <a className="product-item-link" href={this.props.productList[0].link}>
            <span>
              <i className="fa fa-external-link"></i>
            </span>
          </a>
        </li>

        <li className="product-item">
          <a className="upvote-button" href="#">
            <span>
              <i className="fa fa-sort-asc"></i>
            </span>
            {this.props.productList[1].upvote}
          </a>
          <img className="product-item-media" src={this.props.productList[1].media} />
          <section className="product-item-info">
            <a href="#">
              <h2>{this.props.productList[1].name}</h2>
            </a>
            <p>{this.props.productList[1].description}</p>
            <a href="#">
              <img className="small-avatar" src={this.props.productList[1].maker.avatar} />
            </a>
          </section>
          <a className="product-item-link" href={this.props.productList[1].link}>
            <span>
              <i className="fa fa-external-link"></i>
            </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default ProductList;
