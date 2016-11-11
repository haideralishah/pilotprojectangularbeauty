import { Component, OnInit } from '@angular/core';

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

  constructor() {
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

  ngOnInit() {
  }

}
