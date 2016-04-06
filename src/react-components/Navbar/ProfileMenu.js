import React from 'react';
import Actions from '../../actions';

class ProfileMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      showProfileNav: false
    }
  }

  handleClick = () => {
    if (this.state.showProfileNav) {
      this.setState({showProfileNav: false});
    } else {
      this.setState({showProfileNav: true});
    }
  };

  handleClickOutsite = (e) => {
    if (e.target != this.refs.profileBtn) {
      this.setState({showProfileNav: false});
    }
  };

  handleLogout = (e) => {
    e.preventDefault();
    Actions.logout();
  };

  componentWillMount() {
    window.addEventListener("click", this.handleClickOutsite, false);
  }

  componentWillUnMount() {
    window.removeEventListener("click", this.handleClickOutsite, false);
  }

  renderProfileNav() {
    return (
      <nav className="profile-nav" ref="profileNav">
        <a href="#">My Profile</a>
        <a href="#" onClick={this.handleLogout}>Logout</a>
      </nav>
    );
  }

  render() {
    return (
      <section className="profile-menu">
        <img src={this.props.user.avatar} onClick={this.handleClick} className="profile-btn medium-avatar" ref="profileBtn"/>
        {
          this.state.showProfileNav ? this.renderProfileNav() : null
        }
      </section>
    );
  }
}

export default ProfileMenu;
