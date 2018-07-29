import { Component, OnInit } from '@angular/core';
import{FirebaseService} from '../../service/firebase.service';
 import * as firebase from 'firebase';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
 
listings:any; 
  showSpinner: boolean = true;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
 
     
    this.firebaseService.getListnings().subscribe(listings =>{
      this.listings = listings;
      this.showSpinner=false;
      console.log("listings", listings);
 
    });
    
  }

}
