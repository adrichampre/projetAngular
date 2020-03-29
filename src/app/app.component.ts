import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularBI';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAMPkOtNIkMHQeiXW0ceRjcs-rrks736iw',
      authDomain: 'angularbi-58498.firebaseapp.com',
      databaseURL: 'https://angularbi-58498.firebaseio.com',
      projectId: 'angularbi-58498',
      storageBucket: 'angularbi-58498.appspot.com',
      messagingSenderId: '1057787956487',
      appId: '1:1057787956487:web:8d294956c53809dd7009a2'
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

  }
}
