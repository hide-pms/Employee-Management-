import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
 import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: any; 
 
  constructor(public af: AngularFireAuth, public db: AngularFireDatabase, public flashMessage:FlashMessagesService) { 
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.name = auth;
      }
    }); 
  }
 
  logingmail() {
     this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   
  }  
  ngOnInit() {
  }

}
