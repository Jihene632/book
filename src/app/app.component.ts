import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(){
  const config = {
    apiKey: "AIzaSyC_etiGcSEvrp2V3hN2AxMjJkSaVhAr0YU",
    authDomain: "jihene-5bdce.firebaseapp.com",
    databaseURL: "https://jihene-5bdce.firebaseio.com",
    projectId: "jihene-5bdce",
    storageBucket: "",
    messagingSenderId: "747497066392",
    appId: "1:747497066392:web:ffdf4609eb7b8634"
  };
  firebase.initializeApp(config);
}
}
