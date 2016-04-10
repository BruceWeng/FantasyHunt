import React from 'react';
import Actions from '../../actions';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';

@connectToStores
class Upvote extends React.Component {

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  handleVote = () => {
    Actions.addVote(this.props.pid, this.props.user.id);
  };

  render() {
    return (
      <a className="upvote-button" href="#" onClick={this.handleVote}>
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.props.upvote}
      </a>
    );
  }
}

export default Upvote;
