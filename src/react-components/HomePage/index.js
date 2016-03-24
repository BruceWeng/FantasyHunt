import React from 'react';
import ProductList from'../Product/ProductList';
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'Bruce',
            avatar: '/img/profile.jpg'
          }
        },
        {
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
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
