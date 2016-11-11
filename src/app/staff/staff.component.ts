import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  /* -------------header--------------- */
  h1Image: string;
  cellNumber: string;
  address: string;
  timings: string;
  /* -------------header--------------- */

  /* -------------Content--------------- */

  contentImg1: string;
  contentImg2: string;
  contentImg3: string;
  contentImg4: string;
  contentImg5: string;
  contentImg6: string;

  contentHeading1: string;
  contentHeading2: string;
  contentHeading3: string;
  contentHeading4: string;
  contentHeading5: string;
  contentHeading6: string;


  contentSubHeading1: string;
  contentSubHeading2: string;
  contentSubHeading3: string;
  contentSubHeading4: string;
  contentSubHeading5: string;
  contentSubHeading6: string;


  contentDesc1: string;
  contentDesc2: string;
  contentDesc3: string;
  contentDesc4: string;
  contentDesc5: string;
  contentDesc6: string;





  /* -------------Content--------------- */


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
    this.timings = '09.30 AM - 10.00PM';
    /* -------------header--------------- */



    /* -------------Content--------------- */


    this.contentImg1 = 'images/staff1.jpg';
    this.contentImg2 = 'images/staff2.jpg';
    this.contentImg3 = 'images/staff3.jpg';
    this.contentImg4 = 'images/staff4.jpg';
    this.contentImg5 = 'images/staff5.jpg';
    this.contentImg6 = 'images/staff6.jpg';

    this.contentHeading1 = 'Haider Ali';
    this.contentHeading2 = 'Majid Ashraf';
    this.contentHeading3 = 'Perspiciatis';
    this.contentHeading4 = 'Voluptate';
    this.contentHeading5 = 'Perspiciatis';
    this.contentHeading6 = 'Voluptate';


    this.contentSubHeading1 = 'totam rem aperiam';
    this.contentSubHeading2 = 'totam rem aperiam';
    this.contentSubHeading3 = 'totam rem aperiam';
    this.contentSubHeading4 = 'totam rem aperiam';
    this.contentSubHeading5 = 'totam rem aperiam';
    this.contentSubHeading6 = 'totam rem aperiam';


    this.contentDesc1 = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
    this.contentDesc2 = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
    this.contentDesc3 = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
    this.contentDesc4 = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
    this.contentDesc5 = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
    this.contentDesc6 = 'A quick brown fox jumps over the lazy dog.A quick brown fox jumps over the lazy dog.A quick brown fox jumps over the lazy dog.';


    /* -------------Content--------------- */



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



  //       /* -------------Content--------------- */


  //       this.contentImg1 = 'images/staff1.jpg';
  //       this.contentImg2 = 'images/staff2.jpg';
  //       this.contentImg3 = 'images/staff3.jpg';
  //       this.contentImg4 = 'images/staff4.jpg';
  //       this.contentImg5 = 'images/staff5.jpg';
  //       this.contentImg6 = 'images/staff6.jpg';

  //       this.contentHeading1 = this.rec.contentHeading1
  //       this.contentHeading2 = this.rec.contentHeading2
  //       this.contentHeading3 = this.rec.contentHeading3
  //       this.contentHeading4 = this.rec.contentHeading4
  //       this.contentHeading5 = this.rec.contentHeading5
  //       this.contentHeading6 = this.rec.contentHeading6


  //       this.contentSubHeading1 = this.rec.contentSubHeading1
  //       this.contentSubHeading2 = this.rec.contentSubHeading2
  //       this.contentSubHeading3 = this.rec.contentSubHeading3
  //       this.contentSubHeading4 = this.rec.contentSubHeading4
  //       this.contentSubHeading5 = this.rec.contentSubHeading5
  //       this.contentSubHeading6 = this.rec.contentSubHeading6


  //       this.contentDesc1 = this.rec.contentDesc1
  //       this.contentDesc2 = this.rec.contentDesc2
  //       this.contentDesc3 = this.rec.contentDesc3
  //       this.contentDesc4 = this.rec.contentDesc4
  //       this.contentDesc5 = this.rec.contentDesc5
  //       this.contentDesc6 = this.rec.contentDesc6


  //       /* -------------Content--------------- */






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
