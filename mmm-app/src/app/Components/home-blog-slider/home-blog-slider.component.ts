import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog-slider',
  templateUrl: './home-blog-slider.component.html',
  styleUrls: ['./home-blog-slider.component.css']
})
export class HomeBlogSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carouselOptions = {
    nav: false,
    navText: [
      "<div class='prev-slide'></div>", 
      "<div class='next-slide'></div>"],
    responsiveClass: true,
    autoplay: true, 
    slideSpeed : 1000,
    dots:true,
    items: 1
  }
 
  images = [
    {
      image: "assets/images/Blog-Slide/blog-slider-1.jpg",
      text: "Why Calculate Home Loan EMI Before Signing the Agreement?",
      ptext: "If you are contemplating to avail of a Home Loan and wondering about the important factors that need to be taken into consideration, then the first point on that list should be calculating your Home Loan EMI. "
    },
    {
      image: "assets/images/Blog-Slide/blog-slider-2.jpg",
      text: "What All Documents do I Need to Apply for a Business Loan?",
      ptext: "Whether you are running an established business or have just launched your start-up venture, a lack of funds is always a looming challenge. A business owner regularly needs money to purchase machinery, raw material, pay wages, and for other working capital expenses. "
    },
    {
      image: "assets/images/Blog-Slide/blog-slider-3.jpg",
      text: "Top 10 Private Banks in India 2019",
      ptext: "The Indian economy is one of the largest economies in the world. It is not only because of the exceptionally high population but also due to an incredible economic variance amongst its people. "
    }
  ]
}
