import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  /* -------------header--------------- */
  h1Image: string;
  cellNumber: string;
  address: string;
  timings: string;
  /* -------------header--------------- */


  /* -------------content--------------- */
  headingFirst: string;
  headingSecond: string;
  headingThird: string;

  imgFirstCol: string;
  heading2FirstCol: string
  para1FirstCol: string;
  para2FirstCol: string;


  col2year1: string;
  col2year2: string;
  col2year3: string;
  col2year4: string;
  col2year5: string;

  col2Para1: string;
  col2Para2: string;
  col2Para3: string;
  col2Para4: string;
  col2Para5: string;

  col3subHeading: string;
  col3para1: string;




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
    this.timings = '09.30 AM - 12.00AM';
    /* -------------header--------------- */


    /* -------------content--------------- */
    this.headingFirst = 'Who We Are';
    this.headingSecond = 'Our History';
    this.headingThird = 'our services';

    this.imgFirstCol = 'images/about_img.jpg';
    this.imgFirstCol = 'images/about_img.jpg';
    this.heading2FirstCol = 'LOREM IPM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. PRAESENT VESTIBULUM.';
    this.para1FirstCol = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.';
    this.para2FirstCol = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.';


    this.col2year1 = '2000';
    this.col2year2 = '2002';
    this.col2year3 = '2005';
    this.col2year4 = '2008';
    this.col2year5 = '2016';

    this.col2Para1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris.Phasellus porta. Fusce suscipit varius mi.';
    this.col2Para2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris.Phasellus porta. Fusce suscipit varius mi.';
    this.col2Para3 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris.Phasellus porta. Fusce suscipit varius mi.';
    this.col2Para4 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris.Phasellus porta. Fusce suscipit varius mi.';
    this.col2Para5 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris.Phasellus porta. Fusce suscipit varius mi.';



    this.col3subHeading = 'LOREM IPM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. PRAESENT VESTIBULUM.';
    this.col3para1 = 'Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Morbi nunc odio, gida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros';




    /* -------------content--------------- */


    /* -------------Footer--------------- */

    this.fbLink = 'images/dc3.jpg';
    this.twitterLink = 'images/dc3.jpg';
    this.gPlusLink = 'images/dc3.jpg';
    this.information = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    /* -------------Footer--------------- */
    this.messageDesc = 'lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    this.messageFrom = 'Haider Ali Shah'

    this.emailTo = 'headeralishah@gmail.com';
    this.teleLandLine = '+92 341 3542800';
    this.fax = '+92 341 3542800';




  }

  ngOnInit() {
  }

}
