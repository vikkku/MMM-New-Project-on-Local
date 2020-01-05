import { Component, OnInit } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.css']
})
export class ProductsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  carouselOptions = {
    margin: 0,
    nav: true,
    navText: [
      "<div class='prev-slide'></div>", 
      "<div class='next-slide'></div>"],
    responsiveClass: true,
    autoplay: true, 
    slideSpeed : 1000,
    dots:false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      liks:"/personal-loan",
      text: "Personal Loan",
      image: "assets/images/Bann-Slide/slid1-icon.png"
    },
    {
      liks:"/home-loan",
      text: "Home Loan",
      image: "assets/images/Bann-Slide/slid2-icon.png"
    },
    {
      liks:"/loan-against-property",
      text: "Loan Against Property",
      image: "assets/images/Bann-Slide/slid3-icon.png"
    },
    {
      liks:"/business-loan",
      text: "Business Loan",
      image: "assets/images/Bann-Slide/slid4-icon.png"
    },
    {
      liks:"/credit-card",
      text: "Credit Card",
      image: "assets/images/Bann-Slide/slid5-icon.png"
    },
    {
      liks:"/life-insurance",
      text: "Life Insurance",
      image: "assets/images/Bann-Slide/slid6-icon.png"
    },
    {
      liks:"/health-insurance",
      text: "Health Insurance",
      image: "assets/images/Bann-Slide/slid7-icon.png"
    },
    {
      liks:"/home-loan-balance-transfer",
      text: "Home Loan Balance Transfer",
      image: "assets/images/Bann-Slide/slid8-icon.png"
    }
  ]
}

