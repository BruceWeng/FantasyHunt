import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../stores/ProductStore';
import Actions from '../actions';

@connectToStores
class App extends React.Component {
  constructor() {
    super();
    Actions.initSession();
  }

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  render() {
    return (
      <section>
        <Navbar user={this.props.user}/>
        <HomePage/>
      </section>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
