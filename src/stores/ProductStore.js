import alt from '../alt';
import Actions from '../actions';
import {decorate, bind} from 'alt-utils/lib/decorators';

@decorate(alt)
class ProductStore {
  constructor() {
    this.state = {
      user: null,
      products: [],
      comments: []
    };
  }

  @bind(Actions.login, Actions.initSession, Actions.logout)
  setUser(user) {
    this.setState({user: user});
  }

  @bind(Actions.getProducts)
  getProducts(products) {
    this.setState({products: products});
  }

  @bind(Actions.getComments)
  getComments(comments) {
    this.setState({comments: comments});
  }
}

export default alt.createStore(ProductStore);
