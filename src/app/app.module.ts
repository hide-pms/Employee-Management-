import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
// firebase library
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// service 
import{FirebaseService} from './service/firebase.service'
 import { FlashMessagesModule } from 'angular2-flash-messages';
 import { LoadinSComponent } from './components/loadingSpinner/loadin-s.component'; 
 
 
enableProdMode();
const appRoutes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path:'edit-listing/:id', component:EditListingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
  LoadinSComponent,
  
  ],
  imports: [ 
     JsonpModule,
    BrowserModule, 
    FormsModule,
    HttpModule,FlashMessagesModule,
    ReactiveFormsModule,
  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
   ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
