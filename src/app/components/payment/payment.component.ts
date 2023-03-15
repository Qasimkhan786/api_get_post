import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  activebtn = "active"
  first = true;
  sec = false;
  th = false;
  constructor(private router: Router) {
    if (this.first) {
      this.router.navigate(['payment/makepayment']);
    }
  }

  ngOnInit(): void {
  }
  btnchange(value: any) {
    if (value === 'first') {
      this.first = true;
      this.sec = false;
      this.th = false;
      this.router.navigate(['payment/makepayment']);
    }
    if (value === 'sec') {
      this.first = false;
      this.sec = true;
      this.th = false;
      this.router.navigate(['/']);
    }
    if (value === 'th') {
      this.first = false;
      this.sec = false;
      this.th = true;
      this.router.navigate(['payment']);
    }
  }

}
