import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Listing } from '../../service/list';
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    middleName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    
    lastName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    jobPost: new FormControl(null, Validators.required),
    emailId: new FormControl(null, [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$") ]), 
    MobileNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    birthDate: new FormControl(null, Validators.required),
    panNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    pfNumber: new FormControl(),
    uanNumber: new FormControl(),
    packege: new FormControl(),
    bloodGroup: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    image: new FormControl(),

  })

  listing: Listing = new Listing();

  //  firstName:any;
  //  middleName:any;
  // lastName:any;
  // jobPost:any;
  //  emailId:any;
  //  MobileNumber:any;
  //  birthDate:any;
  //  panNumber:any;
  //  uanNumber:any;
  //  pfNumber:any;
  //  packege:any;
  //  bloodGroup:any;
  //  address:any;
  //  city:any;
  //  state:any;
  //  zip:any;
  //  image:any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(listing: any) {
    console.log("value of listadd", listing);
    // let listing = {
    //    firstName: this.firstName,
    //    middleName: this.middleName,
    //    lastName: this.lastName,
    //    jobPost:this.jobPost,
    //    emailId:this.emailId,
    //    MobileNumber: this.MobileNumber,
    //    birthDate: this.birthDate,
    //    panNumber: this.panNumber,
    //    uanNumber: this.uanNumber,
    //    pfNumber: this.pfNumber,
    //    packege:this.packege,
    //    bloodGroup: this.bloodGroup,
    //    address: this.address,
    //    city: this.city,
    //    state:this.state,
    //    zip: this.zip,

    //  }
    this.listing = new Listing();
    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
