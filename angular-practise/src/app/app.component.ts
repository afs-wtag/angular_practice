import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practise';

  showText = false;

  toggleTest(): void{
    this.showText = !this.showText;
  }
}
