import { Component, Input } from '@angular/core';
import {CardOptions} from '../interfaces/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: CardOptions;

}
