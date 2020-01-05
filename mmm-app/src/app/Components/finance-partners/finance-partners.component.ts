import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-partners',
  templateUrl: './finance-partners.component.html',
  styleUrls: ['./finance-partners.component.css']
})
export class FinancePartnersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  carouselOptions = {
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
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
        items: 5,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-1.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-2.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-3.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-4.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-5.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-6.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-7.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-8.png"
    },
    {
      image: "assets/images/FINAN-PART/FINANCE-PARTNERS-9.png"
    }
  ]
}
