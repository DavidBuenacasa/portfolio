import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'portfolio';

  sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/1238412585842380810/feP_OMoTve1gRoYd848FMwSospCohbnR0z4CLvgSnWb6h-2rGQ4evsJSH6NbKSG8mJV8");
    // replace the url in the "open" method with yours
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "My Webhook Name",
      avatar_url: "",
      content: "The message to send"
    }
    request.send(JSON.stringify(params));
  }
}
