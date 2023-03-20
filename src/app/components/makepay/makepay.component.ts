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
  activebtn = "active";

  showText() {
    this.isReadMore = !this.isReadMore
  }
}
