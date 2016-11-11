import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  /* -------------header--------------- */
  h1Image: string;
  cellNumber: string;
  address: string;
  timings: string;
  /* -------------header--------------- */

  /* -------------content--------------- */

  serviceHeading1: string;
  serviceHeading2: string;
  serviceHeading3: string;
  serviceHeading4: string;


  serviceSubHeading1: string;
  serviceSubHeading2: string;
  serviceSubHeading3: string;
  serviceSubHeading4: string;


  firstHeadingLi1: string;
  firstHeadingLi2: string;
  firstHeadingLi3: string;
  firstHeadingLi4: string;
  firstHeadingLi5: string;

  SecondHeadingLi1: string;
  SecondHeadingLi2: string;
  SecondHeadingLi3: string;
  SecondHeadingLi4: string;
  SecondHeadingLi5: string;


  thirdHeadingLi1: string;
  thirdHeadingLi2: string;
  thirdHeadingLi3: string;
  thirdHeadingLi4: string;
  thirdHeadingLi5: string;

  forthHeadingLi1: string;
  forthHeadingLi2: string;
  forthHeadingLi3: string;
  forthHeadingLi4: string;
  forthHeadingLi5: string;










  /* -------------content--------------- */




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
    this.timings = '09.30 AM - 10.00AM';
    /* -------------header--------------- */


    /* -------------content--------------- */
    this.serviceHeading1 = 'Models';
    this.serviceHeading2 = 'Facial';
    this.serviceHeading3 = 'Hair';
    this.serviceHeading4 = 'Skin';


    this.serviceSubHeading1 = 'casting';
    this.serviceSubHeading2 = 'Treatment';
    this.serviceSubHeading3 = 'Treatments';
    this.serviceSubHeading4 = 'Care';


    this.firstHeadingLi1 = 'Always free from repetition';
    this.firstHeadingLi2 = 'Always free from repetition';
    this.firstHeadingLi3 = 'Always free from repetition';
    this.firstHeadingLi4 = 'Always free from repetition';
    this.firstHeadingLi5 = 'Always free from repetition';

    this.SecondHeadingLi1 = 'Always free from repetition';
    this.SecondHeadingLi2 = 'Always free from repetition';
    this.SecondHeadingLi3 = 'Always free from repetition';
    this.SecondHeadingLi4 = 'Always free from repetition';
    this.SecondHeadingLi5 = 'Always free from repetition';


    this.thirdHeadingLi1 = 'Always free from repetition';
    this.thirdHeadingLi2 = 'Always free from repetition';
    this.thirdHeadingLi3 = 'Always free from repetition';
    this.thirdHeadingLi4 = 'Always free from repetition';
    this.thirdHeadingLi5 = 'Always free from repetition';

    this.forthHeadingLi1 = 'Always free from repetition';
    this.forthHeadingLi2 = 'Always free from repetition';
    this.forthHeadingLi3 = 'Always free from repetition';
    this.forthHeadingLi4 = 'Always free from repetition';
    this.forthHeadingLi5 = 'Always free from repetition';





    /* -------------content--------------- */


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
