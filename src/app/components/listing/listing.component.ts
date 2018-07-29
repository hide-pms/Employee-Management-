import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
declare var jsPDF: any; // Important
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],

})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  constructor(private firebaseService: FirebaseService,
    private router: Router, private route: ActivatedRoute,

  ) { }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printDetails').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <style>
          
.card {
  margin-top: 20px;
  padding: 30px;
  background-color: rgba(214, 224, 226, 0.2);
  -webkit-border-top-left-radius: 5px;
  -moz-border-top-left-radius: 5px;
  border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-top-right-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.card.hovercard {
  position: relative;
  padding-top: 0;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 1);
}

.card.hovercard .card-background {
  height: 130px;
}

.card-background img {
  -webkit-filter: blur(25px);
  -moz-filter: blur(25px);
  -o-filter: blur(25px);
  -ms-filter: blur(25px);
  filter: blur(25px);
  margin-left: -100px;
  margin-top: -200px;
  min-width: 130%;
}

.card.hovercard .useravatar {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
}

.card.hovercard .useravatar img {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
}

.card.hovercard .card-info {
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
}

.card.hovercard .card-info .card-title {
  padding: 0 5px;
  font-size: 20px;
  line-height: 1;
  color: #262626;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

@media print {
  .no-print,
  .no-print * {
      display: none !important;
  }
}
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
  // download() {  


  //   var item = {
  //     "First Name" : this.listing.firstName,
  //     "Middle Name" : this.listing.middleName,
  //     "Last Name" : this.listing.lastName,
  //     "Birth Date" : this.listing.birthDate,
  //     "Mobile Number" : this.listing.MobileNumber,
  //     "Email Id" : this.listing.emailId,
  //     "Pan Number" : this.listing.panNumber,
  //     "UAN Number" : this.listing.uanNumber,
  //     "PF Number" : this.listing.pfNumber,
  //     "Packege" : this.listing.packege,
  //     "Blood Group" : this.listing.bloodGroup,
  //     "Address" : this.listing.address,
  //     "city" : this.listing.city

  //   };

  //   var doc = new jsPDF();  
  //   var col = ["Category", "Employee Details"];
  //   var rows = [];

  //   for(var key in item){
  //       var temp = [key, item[key]];
  //       rows.push(temp);
  //   }
  //   doc.autoTable(col, rows);  

  //   doc.save('Test.pdf');
  //       }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListningDetails(this.id).subscribe(listing => {
      this.listing = listing;

      console.log("listings", listing);

    });
  }

  onDeleteClick() {
    this.firebaseService.deleteListing(this.id);

    this.router.navigate(['/listings']);
  }
}
