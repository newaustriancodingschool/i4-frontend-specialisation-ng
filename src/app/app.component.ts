import { Component } from '@angular/core';
import { pipeBind1 } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  participants = [
    {
      name: 'Zidan, Adib',
      github: 'AdibZidan',
      project: 'i4-angular-projects'
    },
    {
      name: 'Kamalova, Aizhana',
      github: 'janamava',
      project: 'frontend-angular'
    },
    { name: 'Fernandes, Tina', github: 'tina-fernan', project: 'Angular' },
    { name: 'Hajyahya, Marj', github: 'Marj-11', project: 'Chess-board' },
    {
      name: 'Hammoud, Mohamed',
      github: 'mu7m3d',
      project: 'Angular-frontend'
    },
    { name: 'Raslan, Badi', github: 'badisalim', project: 'Angular' },
    {
      name: 'Abdo, Hamada',
      github: 'hamadeabdo',
      project: 'myFirstAngularApp'
    },
    { name: 'Khamam, Hala', github: 'Halakh', project: 'Angular' }
  ].sort((p1, p2) => (p1.name > p2.name ? 1 : -1));
}
