import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
 import { FlashMessagesService } from 'angular2-flash-messages';
 import { Router, ActivatedRoute, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 

  name: any;
 
  constructor(public af: AngularFireAuth, public db: AngularFireDatabase, public flashMessage:FlashMessagesService,   private router:Router, private route:ActivatedRoute) { 
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.name = auth;
      }
    }); 
  }
 
  logingmail() {
     this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.flashMessage.show('Login Successfully', {cssClass:'alert alert-success', timeout:3000});
  } 
   logoutgmail() {
     this.af.auth.signOut();
      this.name=false;
      this.flashMessage.show('You are logged out', {cssClass:'alert alert-success', timeout:3000});
          
     
        this.router.navigate(['/home']);
    
       
  }

  ngOnInit() {
  }

}
