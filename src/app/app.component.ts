import { MessagingService } from './messaging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private messagingService:  MessagingService) {
    this.messagingService.getPermission()
  }
}
