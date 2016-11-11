import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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


  http: Http;
  constructor(http: Http) {

    this.http = http;


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


  //       /* -------------content--------------- */
  //       this.serviceHeading1 = this.rec.serviceHeading1
  //       this.serviceHeading2 = this.rec.serviceHeading2
  //       this.serviceHeading3 = this.rec.serviceHeading3
  //       this.serviceHeading4 = this.rec.serviceHeading4


  //       this.serviceSubHeading1 = this.rec.serviceSubHeading1
  //       this.serviceSubHeading2 = this.rec.serviceSubHeading2
  //       this.serviceSubHeading3 = this.rec.serviceSubHeading3
  //       this.serviceSubHeading4 = this.rec.serviceSubHeading4


  //       this.firstHeadingLi1 = this.rec.firstHeadingLi1
  //       this.firstHeadingLi2 = this.rec.firstHeadingLi2
  //       this.firstHeadingLi3 = this.rec.firstHeadingLi3
  //       this.firstHeadingLi4 = this.rec.firstHeadingLi4
  //       this.firstHeadingLi5 = this.rec.firstHeadingLi5

  //       this.SecondHeadingLi1 = this.rec.SecondHeadingLi1
  //       this.SecondHeadingLi2 = this.rec.SecondHeadingLi2
  //       this.SecondHeadingLi3 = this.rec.SecondHeadingLi3
  //       this.SecondHeadingLi4 = this.rec.SecondHeadingLi4
  //       this.SecondHeadingLi5 = this.rec.SecondHeadingLi5


  //       this.thirdHeadingLi1 = this.rec.thirdHeadingLi1
  //       this.thirdHeadingLi2 = this.rec.thirdHeadingLi2
  //       this.thirdHeadingLi3 = this.rec.thirdHeadingLi3
  //       this.thirdHeadingLi4 = this.rec.thirdHeadingLi4
  //       this.thirdHeadingLi5 = this.rec.thirdHeadingLi5

  //       this.forthHeadingLi1 = this.rec.forthHeadingLi1
  //       this.forthHeadingLi2 = this.rec.forthHeadingLi2
  //       this.forthHeadingLi3 = this.rec.forthHeadingLi3
  //       this.forthHeadingLi4 = this.rec.forthHeadingLi4
  //       this.forthHeadingLi5 = this.rec.forthHeadingLi5





  //       /* -------------content--------------- */








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
