import React from 'react';

class Popup extends React.Component {
  renderPopupContent() {
    return (
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png" onClick={this.props.hidePopup}/>
        </section>
        <section className="popup-content login-popup">
          <section>{this.props.children}</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {
          this.props.status ? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

export default Popup;
