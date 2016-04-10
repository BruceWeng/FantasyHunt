import React from 'react';
import ProductPopup from './ProductPopup';
import Upvote from './Upvote';
class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      productPopupStatus: false
    }
  }

  showProductPopup = () => {
    this.setState({productPopupStatus: true});
  };

  hideProductPopup = () => {
    this.setState({productPopupStatus: false});
  };

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
        <a href="#" onClick={this.showProductPopup}>
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
        <Upvote {...this.props} />
        <img className="product-item-media" src={this.props.media} />
        {this.renderinfoSession()}
        {this.renderNewWindowIcon()}
        <ProductPopup {...this.props} status={this.state.productPopupStatus} hidePopup={this.hideProductPopup}/>
      </li>
    );
  }
}

export default ProductItem;
