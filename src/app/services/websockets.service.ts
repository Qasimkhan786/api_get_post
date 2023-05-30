import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  webSocket!: WebSocket
  constructor() {
    this.connectWebSocket();

  }
  private connectWebSocket() {
    this.webSocket = new WebSocket('ws://localhost:4000');

    this.webSocket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    this.webSocket.onmessage = (event) => {
      const message = event.data;
      console.log('WebSocket message received:', message);
    };

    // this.webSocket.onclose = () => {
    //   console.log('WebSocket connection closed');
    // };
  }

  sendMessage(message: string) {
    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(message);
    } else {
      console.log('WebSocket connection is not open');
    }
  }


  // sendMessage(message: string) {
  //   if (this.webSocket.readyState === WebSocket.OPEN) {
  //     this.webSocket.send(message);
  //   } else {
  //     console.log('WebSocket connection is not open');
  //   }
  // }
}
