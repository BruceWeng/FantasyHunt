import React from 'react';

class Popup extends React.Component {
  renderPopupContent() {
    return (
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png"/>
        </section>
        <section className="popup-content">
          <section>POPUP CONTENT SHOULD BE HERE</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {this.renderPopupContent()}
      </section>
    );
  }
}

export default Popup;
