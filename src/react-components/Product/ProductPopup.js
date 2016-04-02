import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {
        id: 2,
        name: 'Third Wave Fashion',
        link: 'http://Thirdwavefashion.com',
        media: '/img/thirdwavefashion.jpeg',
        upvote: 256,
        description: 'Fashion Tech Startup',
        maker: {
          name: 'Ashley',
          avatar: '/img/ashley.jpeg'
        }
      }
    }
  }

  renderUpvoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.state.product.upvote}
      </a>
    );
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }

  render() {
    return (
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
      </Popup>
    );
  }
}

export default ProductPopup;
