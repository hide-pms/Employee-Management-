import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../service/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
 import * as firebase from 'firebase';
 import { Listing } from '../../service/list';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],

})
export class EditListingComponent implements OnInit {
  listing: any;
  id; 
  userForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    middleName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    
    lastName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    jobPost: new FormControl(null, Validators.required),
    emailId: new FormControl(null, [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$") ]), 
    MobileNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    birthDate: new FormControl(null, Validators.required),
    panNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    pfNumber: new FormControl(null),
    uanNumber: new FormControl(null),
    packege: new FormControl(null),
    bloodGroup: new FormControl(null),
    address: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    zip: new FormControl(null),
   

  })
   constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.id= this.route.snapshot.params['id'];
    this.firebaseService.getListningDetails(this.id).subscribe(listing =>
    {
      this.listing = listing;

       console.log("listings edit", listing);
       
    });
    this.id = this.route.snapshot.params['id'];
    this.userForm = new FormGroup({
      firstName: new FormControl(this.listing.firstName, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      middleName: new FormControl(this.listing.middleName, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      
      lastName: new FormControl(this.listing.lastName, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      jobPost: new FormControl(this.listing.jobPost, Validators.required),
      emailId: new FormControl(this.listing.emailId, [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$") ]), 
      MobileNumber: new FormControl(this.listing.MobileNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      birthDate: new FormControl(this.listing.birthDate),
      panNumber: new FormControl(this.listing.panNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      pfNumber: new FormControl(this.listing.pfNumber),
      uanNumber: new FormControl(this.listing.uanNumber),
      packege: new FormControl(this.listing.packege),
      bloodGroup: new FormControl(this.listing.bloodGroup),
      address: new FormControl(this.listing.address),
      city: new FormControl(this.listing.city),
      state: new FormControl(this.listing.state),
      zip: new FormControl(this.listing.zip),
     
  
    })
  }

  onEditSubmit(listing: any){
    console.log("value of listedit submit", listing);
  //  let listing = this.listing;     
    this.firebaseService.updateListing(this.id, listing);
        console.log("edit list",   listing)
    this.router.navigate(['/listings']);
  }

}
