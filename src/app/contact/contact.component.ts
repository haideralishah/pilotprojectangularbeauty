import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /* -------------header--------------- */
  h1Image: string;
  cellNumber: string;
  address: string;
  timings: string;
  /* -------------header--------------- */


  /* -------------Footer--------------- */

  fbLink: string;
  twitterLink: string;
  gPlusLink: string;

  information: string;


  messageDesc: string;
  messageFrom: string;

  emailTo: string;
  teleLandLine: string;
  fax: string;
  /* -------------Footer--------------- */

  http: Http;
  constructor(http: Http) {

    this.http = http;

    /* -------------header--------------- */
    this.h1Image = 'images/logo.png';
    this.cellNumber = '1-234-567-8900';
    this.address = 'Neque porro quisquam, dolor sit amet, USA.';
    this.timings = '09.30 AM - 10.00AM';
    /* -------------header--------------- */










    /* -------------Footer--------------- */

    this.fbLink = 'images/dc3.jpg';
    this.twitterLink = 'images/dc3.jpg';
    this.gPlusLink = 'images/dc3.jpg';
    this.information = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';


    this.messageDesc = 'lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    this.messageFrom = 'Haider Ali Shah'

    this.emailTo = 'headeralishah@gmail.com';
    this.teleLandLine = '+92 341 3542800';
    this.fax = '+92 341 3542800';
    /* -------------Footer--------------- */

  }
  data: any;
  rec: any;

ngOnInit() {}

  // ngOnInit() {

  //   this.http.post('http://localhost:5000/getAngularBeautyData', {
  //     autherName: 'haider'
  //   })
  //     .subscribe((res: Response) => {
  //       this.data = res.json();
  //       this.rec = this.data.record.data;
  //       // console.log(this.data);
  //       console.log(this.rec);



  //       /* -------------header--------------- */
  //       this.h1Image = 'images/logo.png';
  //       this.cellNumber = this.rec.cellNumber
  //       this.address = this.rec.address
  //       this.timings = this.rec.timings
  //       /* -------------header--------------- */

  //       /* -------------Footer--------------- */

  //       this.fbLink = 'images/dc3.jpg';
  //       this.twitterLink = 'images/dc3.jpg';
  //       this.gPlusLink = 'images/dc3.jpg';
  //       this.information = this.rec.information


  //       this.messageDesc = this.rec.messageDesc
  //       this.messageFrom = this.rec.messageFrom

  //       this.emailTo = this.rec.emailTo
  //       this.teleLandLine = this.rec.teleLandLine
  //       this.fax = this.rec.fax
  //       /* -------------Footer--------------- */


  //     });
  // }

}
