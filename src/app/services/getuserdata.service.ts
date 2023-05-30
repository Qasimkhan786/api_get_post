import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetuserdataService {
  urlget="https://jsonplaceholder.typicode.com/todos";
  urlsend="ws://localhost:4000";
  constructor(private http:HttpClient) {

    
   }
   user(){
    return this.http.get(this.urlget)
   }
   senddata(senddata:any){
    return this.http.post(this.urlsend,senddata)
   }
   getBrowserName(): string {
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;
    var val:any='';
    /* Creating a regular expression
    containing some mobile devices keywords
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;
    
    /* Using test() method to search regexp in details
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);
    
    if (isMobileDevice) {
       val="Mobile";
    } else {
       val="Desktop";
    }

    return val;
  }
}
