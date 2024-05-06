import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio-component.component.html',
  styleUrl: './inicio-component.component.css'
})
export class InicioComponentComponent {

  downloadMyFile(){
    const link = document.createElement('cv');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'src/assets/files/curriculum_david.pdf');
    link.setAttribute('download', 'curriculum_david.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
