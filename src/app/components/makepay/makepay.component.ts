import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makepay',
  templateUrl: './makepay.component.html',
  styleUrls: ['./makepay.component.scss']
})
export class MakepayComponent implements OnInit {

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
