import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrl: './contacto-component.component.css'
})
export class ContactoComponentComponent {

  nombre:string;

  email:string;

  constructor(){
    this.nombre="";
    this.email="";
  }

  change(){
    this.nombre="wdwd "
  }

  sendMessage():any{
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/1238527290586042439/3Dxu-ZL1bjeGY8nSyo-DTkaUgujzuHF9pFMNX9aUFHCEaFUyZWFfF2mqAP6kX6rFN9hX");
    // replace the url in the "open" method with yours
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Notificacion de Contacto",
      avatar_url: "",
      content: "@sirdavo " + this.nombre + " quiere contactar contigo, su email es " + this.email
    }
    request.send(JSON.stringify(params));
  }

  CallClick(): any {
    console.log('clicked');
} 

}
