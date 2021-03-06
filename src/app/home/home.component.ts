import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* -------------header--------------- */
  h1Image: string;
  cellNumber: string;
  address: string;
  timings: string;
  /* -------------header--------------- */


  /* -------------cover--------------- */
  h2FirstHeading: string;
  h2SecondHeading: string;

  coverFirstImage: string;
  coverSecondImage: string;
  coverThirdImage: string;
  coverForthImage: string;

  coverFirstHeading: string;
  coverSecondHeading: string;
  coverThirdHeading: string;
  coverForthHeading: string;


  coverFirstDesc: string;
  coverSecondDesc: string;
  coverThirdDesc: string;
  coverForthDesc: string;



  announcingImage: string;
  announcingDesc: string;

  /* -------------cover--------------- */


  /* -------------content slogan--------------- */

  contentSlogan: string;
  contentSubSlogan: string;

  /* -------------content slogan--------------- */


  /* -------------DC Selection--------------- */

  imageDcFirst: string;
  headingDcFirst: string;
  sububHeadingDcFirst: string;
  discDcFirst: string;


  imageDcSecond: string;
  headingDcSecond: string;
  sububHeadingDcSecond: string;
  discDcSecond: string;


  imageDcThird: string;
  headingDcThird: string;
  sububHeadingDcThird: string;
  discDcThird: string;

  /* -------------DC Selection--------------- */


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


    /* -------------cover--------------- */
    this.h2FirstHeading = 'Latest Products';
    this.h2SecondHeading = "What's New";


    this.coverFirstImage = 'images/grid-img1.jpg';
    this.coverSecondImage = 'images/grid-img2.jpg';
    this.coverThirdImage = 'images/grid-img5.jpg';
    this.coverForthImage = 'images/grid-img4.jpg';

    this.coverFirstHeading = 'Neque quisquam';
    this.coverSecondHeading = 'Neque quisquam';
    this.coverThirdHeading = 'Neque quisquam';
    this.coverForthHeading = 'Neque quisquam';

    this.coverFirstDesc = 'Finibus Bonorum Malorum that a reader will be distracted by the readable.';
    this.coverSecondDesc = 'Finibus Bonorum Malorum that a reader will be distracted by the readable.';
    this.coverThirdDesc = 'Finibus Bonorum Malorum that a reader will be distracted by the readable.';
    this.coverForthDesc = 'Finibus Bonorum Malorum that a reader will be distracted by the readable.';

    this.announcingImage = 'images/grid2-img.jpg';
    this.announcingDesc = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its	layout.';

    /* -------------cover--------------- */


    /* -------------content slogan--------------- */
    this.contentSlogan = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam.'
    this.contentSubSlogan = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and					1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied					by Englishversions from the 1914 translation by H. Rackham.'

    /* -------------content slogan--------------- */


    /* -------------DC Selection--------------- */
    this.imageDcFirst = 'images/dc1.jpg';
    this.headingDcFirst = 'Skin Care';
    this.sububHeadingDcFirst = 'totam rem aperiam';
    this.discDcFirst = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';


    this.imageDcSecond = 'images/dc2.jpg';
    this.headingDcSecond = 'Skin Care';
    this.sububHeadingDcSecond = 'totam rem aperiam';
    this.discDcSecond = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';


    this.imageDcThird = 'images/dc3.jpg';
    this.headingDcThird = 'Skin Care';
    this.sububHeadingDcThird = 'totam rem aperiam';
    this.discDcThird = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

    /* -------------DC Selection--------------- */


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

  //       /* -------------cover--------------- */
  //       this.h2FirstHeading = this.rec.h2FirstHeading
  //       this.h2SecondHeading = this.rec.h2SecondHeading

  //       this.coverFirstImage = 'images/grid-img1.jpg';
  //       this.coverSecondImage = 'images/grid-img2.jpg';
  //       this.coverThirdImage = 'images/grid-img5.jpg';
  //       this.coverForthImage = 'images/grid-img4.jpg';

  //       this.coverFirstHeading = this.rec.coverFirstHeading
  //       this.coverSecondHeading = this.rec.coverSecondHeading
  //       this.coverThirdHeading = this.rec.coverThirdHeading
  //       this.coverForthHeading = this.rec.coverForthHeading

  //       this.coverFirstDesc = this.rec.coverFirstDesc
  //       this.coverSecondDesc = this.rec.coverSecondDesc
  //       this.coverThirdDesc = this.rec.coverThirdDesc
  //       this.coverForthDesc = this.rec.coverForthDesc

  //       this.announcingImage = 'images/grid2-img.jpg';
  //       this.announcingDesc = this.rec.announcingDesc

  //       /* -------------cover--------------- */


  //       /* -------------content slogan--------------- */
  //       this.contentSlogan = this.rec.contentSlogan
  //       this.contentSubSlogan = this.rec.contentSubSlogan

  //       /* -------------content slogan--------------- */

  //       /* -------------DC Selection--------------- */
  //       this.imageDcFirst = 'images/dc1.jpg';
  //       this.headingDcFirst = this.rec.headingDcFirst
  //       this.sububHeadingDcFirst = this.rec.sububHeadingDcFirst
  //       this.discDcFirst = this.rec.discDcFirst


  //       this.imageDcSecond = 'images/dc2.jpg';
  //       this.headingDcSecond = this.rec.headingDcSecond
  //       this.sububHeadingDcSecond = this.rec.sububHeadingDcSecond
  //       this.discDcSecond = this.rec.discDcSecond


  //       this.imageDcThird = 'images/dc3.jpg';
  //       this.headingDcThird = this.rec.headingDcThird
  //       this.sububHeadingDcThird = this.rec.sububHeadingDcThird
  //       this.discDcThird = this.rec.discDcThird

  //       /* -------------DC Selection--------------- */

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
