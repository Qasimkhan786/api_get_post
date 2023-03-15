import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dash=true;
  cards=false;
  accounts=false;
  tran=false;
  pay=false;
  in=false;
  trad=false;
  repo=false;
  ps=false;
  forbtn(value:any){
    if(value==="das"){
      this.dash=true;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="accounts"){
      this.dash=false;
      this.cards=false;
      this.accounts=true;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="cards"){
      this.dash=false;
      this.cards=true;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="tran"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=true;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="pay"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=true;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="in"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=true;
      this.trad=false;
      this.repo=false;
      this.ps=false;
    }
    else if(value==="trad"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=true;
      this.repo=false;
      this.ps=false;
    }
    
    else if(value==="repo"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=true;
      this.ps=false;
    }
    else if(value==="ps"){
      this.dash=false;
      this.cards=false;
      this.accounts=false;
      this.tran=false;
      this.pay=false;
      this.in=false;
      this.trad=false;
      this.repo=false;
      this.ps=true;

    }
  }
}
