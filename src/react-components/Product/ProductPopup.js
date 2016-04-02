import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props} style="product-popup">
        <h2>Product Info Here</h2>
      </Popup>
    );
  }
}

export default ProductPopup;
