import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
 import * as firebase from 'firebase';
 import {Listing} from './list';

@Injectable()
export class FirebaseService {
 listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any> ;
    folder: any ;
  constructor(private af: AngularFireAuth,
              private db: AngularFireDatabase) 
              {
                 this.folder = 'listingimages';
                 
               }
  getListnings(){
    this.listings = this.db.list('/listings',{
      query:{
        orderByChild:'firstName',
        
      }
    }) as FirebaseListObservable<Listing[]>
    return this.listings;
  };
getListningDetails(id){
  this.listing= this.db.object('/listings/'+id) as FirebaseObjectObservable<Listing>
  return this.listing;
}
  addListing(listing){
    // Create root ref
    console.log("add listing", listing);
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        
         
      let spaceRef = storageRef.child(listing.path);
      storageRef.child(path).getDownloadURL().then((url) => {
        // Set image url
        listing.imageUrl = url;
         console.log("push listing", listing);
        return this.listings.push(listing);
      }).catch((error) => {
        console.log(error);
      });
      });
    }
  }
    updateListing(id, listing){
    
    //     let storageRef = firebase.storage().ref();
    // for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
    //   let path = `/${this.folder}/${selectedFile.name}`;
    //   let iRef = storageRef.child(path);
    //   iRef.put(selectedFile).then((snapshot) => {
    //     listing.image = selectedFile.name ;
        
    //     listing.path = path;
        
         
    //   let spaceRef = storageRef.child(listing.path);
    //   storageRef.child(path).getDownloadURL().then((url) => {
    //     // Set image url
    //     listing.imageUrl = url;
    //      console.log("push listing", listing);        
    //return this.listings.update(id, listing);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    //   });
    // }
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}

// interface Listing{
//   $key:string;
//   $firstName: string;
//   $middleName: string;
//   $lastName: string;
//   $emailId: string;
//   $MobileNumber: string;
//   $birthDate:string;
//   $panNumber:string;
//   $PfNumber:string;
//   $uanNumber:string;
//   $packege:string;  
//   $bloodGroup:string;
//   $address:string;
//   $city:string;
//   $state:string;
//   $zip:string;
//   $image:string;

// }