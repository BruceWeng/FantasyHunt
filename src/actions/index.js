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
        // var products = _.values(snapshot.val()); products in array without keys
        var productsValue = snapshot.val();
        var products = _(productsValue).keys().map((productKey) => {
          var item = _.clone(productsValue[productKey]);
          item.key = productKey;
          return item;
        })
        .value();
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

  addVote(productId, userId) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com');

      var voteRef = firebaseRef.child('votes').child(productId).child(userId);
      voteRef.on('value', (snapshot) => {
        if(snapshot.val() == null) {
          voteRef.set(true);

          firebaseRef = firebaseRef.child('products').child(productId).child('upvote');

          var vote = 0;
          firebaseRef.on('value', (snapshot) => {
            vote = snapshot.val();
          });
          firebaseRef.set(vote+1);
        }
      });
    }
  }
}

export default alt.createActions(Actions);
