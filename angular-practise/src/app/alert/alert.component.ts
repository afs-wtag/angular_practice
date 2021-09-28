import { Component, Input } from '@angular/core';
import {AlertOptions} from '../interfaces/alert';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() alert: AlertOptions;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() color: string;
  @Input() closable: string;
  
}
