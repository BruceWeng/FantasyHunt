import alt from '../alt';
import Firebase from 'firebase';
import _ from 'lodash';

class Actions {

  initSession() {
      return (dispatch) => {
        var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com');
        var authData = firebaseRef.getAuth();
        var user;

        if (authData) {
          user = {
            id: authData.facebook.id,
            name: authData.facebook.displayName,
            avatar: authData.facebook.profileImageURL
          }
        } else {
          user = null;
        }
        setTimeout(() => dispatch(user));
      }
  }

  login() {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com');
      firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
        if (error) {
          return;
        }

        var user = {
          id: authData.facebook.id,
          name: authData.facebook.displayName,
          avatar: authData.facebook.profileImageURL
        }
        firebaseRef.child("users").child(authData.facebook.id).set(user);
        dispatch(user);
      });
    }
  }

  logout() {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com');
      firebaseRef.unauth();
      setTimeout(() => dispatch(null));
    }
  }

  getProducts() {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com/products');
      firebaseRef.on('value', (snapshot) => {
        var products = _.values(snapshot.val());
        dispatch(products);
      });
    }
  }

  addProduct(product) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com/products');
      firebaseRef.push(product);
    }
  }
}

export default alt.createActions(Actions);
