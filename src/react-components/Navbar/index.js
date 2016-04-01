import React from 'react';
import LoginPopup from './LoginPopup';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true});
  };

  hidePopup = () => {
    this.setState({popupStatus: false});
  };

  renderProductSearch() {
    return (
      <section className="left-side">
        <input className="product-search" placeholder="SEARCH" />
      </section>
    );
  }

  renderLogo() {
    return (
      <a href="#"><img src="/img/F.ico"/></a>
    );
  }

  renderUser() {
    return (
      <section className="right-side">
        <a href="#" onClick={this.showPopup} className="login-btn">LOGIN</a>
      </section>
    );
  }

  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderProductSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </section>
        <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
      </section>
    );
  }
}

export default Navbar;
