import { Component } from '@angular/core';
import { pipeBind1 } from '@angular/core/src/render3';
import { purchases } from './shop/purchases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  purchases = purchases;
}
