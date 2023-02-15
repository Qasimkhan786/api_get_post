import { Component, OnInit } from '@angular/core';
import{GetuserdataService} from "../../services/getuserdata.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  val:any;
  constructor(private getbrowser:GetuserdataService) {
    this.val=getbrowser.getBrowserName();
    console.log(this.val);
  }
  
  ngOnInit(): void {
  }
  

}
