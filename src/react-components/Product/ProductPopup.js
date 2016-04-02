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

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <sction className="post-comment">
          <img className="medium-avatar" src="/img/ashley.jpeg"/>
          <input placeholder="what do you think of this product?"/>
        </sction>
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
