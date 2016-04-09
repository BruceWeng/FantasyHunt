import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';

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
        {
          this.props.user
          ?
          //Display Post link here
          <section>
            <span>
              <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
              <ProfileMenu user={this.props.user}/>
            </span>
            <PostPopup user={this.props.user} status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
          :
          //Display Login link here
          <section>
            <a href="#" onClick={this.showPopup} className="login-btn">LOGIN</a>
            <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
        }
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
      </section>
    );
  }
}

export default Navbar;
