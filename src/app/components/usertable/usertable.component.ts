import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnd='medium1btn';
  btnda="medium1btn medactive";
  outline="foroutline"
  val=true;
  
  val1=false;
  forcolor(){
    this.val=!this.val
  }
}
