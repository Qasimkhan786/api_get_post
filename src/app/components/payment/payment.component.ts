import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isReadMore = true;
  activebtn="active"
  first=true;
  sec=false;
  th=false;

  showText() {
     this.isReadMore = !this.isReadMore
  }
  btnchange(value:any){
    if(value==='first'){
      this.first=true;
      this.sec=false;
      this.th=false;
    }
    if(value==='sec'){
      this.first=false;
      this.sec=true;
      this.th=false;
    }
    if(value==='th'){
      this.first=false;
      this.sec=false;
      this.th=true;
    }
  }

}
