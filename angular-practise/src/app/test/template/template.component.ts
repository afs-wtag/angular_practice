import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public name = "Shafia";
  names = [{value: 'Mr. X'}, {value: 'Mr. Y'}];

  constructor() { }

  ngOnInit(): void {
  }

  greetuser(){
    return "Hello " + this.name;
  }
}


