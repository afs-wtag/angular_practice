import { Component } from '@angular/core';
import {Cards} from './interfaces/card';
import {Alerts} from './interfaces/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practise';
  alerts = Alerts;
  cards = Cards;
}
