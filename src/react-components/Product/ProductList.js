import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="product-list">
        {
          this.props.productList.map(function(item, index) {
            return <ProductItem key={index} {...item}/>
          })
        }
      </ul>
    );
  }
}

export default ProductList;
