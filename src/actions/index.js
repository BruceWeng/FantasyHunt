import alt from '../alt';
import Firebase from 'firebase';

class Actions {
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
}

export default alt.createActions(Actions);
