import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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
    { name: 'Khamam, Hala', github: 'Halakh', project: 'Angular' },
    { name: 'Abou Rshaid, Tammam', github: 'tammamabourshaid', project: 'i4-angularjs' }
  ].sort((p1, p2) => (p1.name > p2.name ? 1 : -1));

  constructor() {}

  ngOnInit() {}
}
