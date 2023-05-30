import { Component } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';
import { webSocket } from 'rxjs/webSocket';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api_get_post';
  // message = "hello";
  // subject = webSocket('ws://localhost:4000');
  constructor(private WebsocketsService:WebsocketsService) {
    // WebsocketsService.user().subscribe(msg => {
    //   // this.received.push(this.);
    //   console.log("Response from websocket: " + msg);
    // });
  }
  //   subject.subscribe((res: any) => {
  //   console.log(res)

  // });
  // sendto_server() {
  //   console.log('button click')
  //   .subscribe((res)=>{
  //     console.log(res)
  //   });
    // this.subject.next("hello");
    // this.subject.complete();
  // }
  sendMessage() {
    this.WebsocketsService.sendMessage('Hello, server!');
  }
}
