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
  fordaysactive="active";
  // val1=false;
  component1(){
    if(this.val){
      this.val=false;
    }

  }
  component2(){
    if(!this.val){
      this.val=true;
    }
  }
  mon=true;
  tue=false;
  wed=false;
  th=false;
  fri=false;
  sat=false;
  sun=false;
  fordaysbtn(value:any){
    if(value=="mon"){
      this.mon=true;
      this.tue=false;
      this.wed=false;
      this.th=false;
      this.fri=false;
      this.sat=false;
      this.sun=false;
    }
    else if(value=="tue"){
      this.mon=false;
      this.tue=true;
      this.wed=false;
      this.th=false;
      this.fri=false;
      this.sat=false;
      this.sun=false;
    }
    else if(value=="wed"){
      this.mon=false;
      this.tue=false;
      this.wed=true;
      this.th=false;
      this.fri=false;
      this.sat=false;
      this.sun=false;
    }
    else if(value=="th"){
      this.mon=false;
      this.tue=false;
      this.wed=false;
      this.th=true;
      this.fri=false;
      this.sat=false;
      this.sun=false;
    }
    else if(value=="fri"){
      this.mon=false;
      this.tue=false;
      this.wed=false;
      this.th=false;
      this.fri=true;
      this.sat=false;
      this.sun=false;
    }
    else if(value=="sat"){
      this.mon=false;
      this.tue=false;
      this.wed=false;
      this.th=false;
      this.fri=false;
      this.sat=true;
      this.sun=false;
    }
    else if(value=="sun"){
      this.mon=false;
      this.tue=false;
      this.wed=false;
      this.th=false;
      this.fri=false;
      this.sat=false;
      this.sun=true;
    }
  }
}
