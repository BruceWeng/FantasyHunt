import Alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login() {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://fantasyhunt.firebaseio.com');
      firebaseRef.authWithOAuthPopup('facebook', (error, user) => {
        if (error) {
          return;
        }
        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);
