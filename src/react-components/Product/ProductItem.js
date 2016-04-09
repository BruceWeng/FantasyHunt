import React from 'react';
import ProductPopup from './ProductPopup';
import Actions from '../../actions';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';

@connectToStores
class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      productPopupStatus: false
    }
  }

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  showProductPopup = () => {
    this.setState({productPopupStatus: true});
  };

  hideProductPopup = () => {
    this.setState({productPopupStatus: false});
  };

  handleVote = () => {
    Actions.addVote(this.props.pid, this.props.user);
  };
  renderUpvoteButton() {
    return (
      <a className="upvote-button" href="#" onClick={this.handleVote}>
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
        {this.renderUpvoteButton()}
        <img className="product-item-media" src={this.props.media} />
        {this.renderinfoSession()}
        {this.renderNewWindowIcon()}
        <ProductPopup status={this.state.productPopupStatus} hidePopup={this.hideProductPopup}/>
      </li>
    );
  }
}

export default ProductItem;
