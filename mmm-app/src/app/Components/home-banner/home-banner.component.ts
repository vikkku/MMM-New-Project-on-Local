import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // declared array of months.
  products = ["Personal Loan", "Home Loan", "Loan Against Property", "Business Loan", "Credit Card", 
  "Life Insurance", "Health Insurance", "Home Loan Balance Transfer"];
}
