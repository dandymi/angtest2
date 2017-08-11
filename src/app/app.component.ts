import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniele';
  cognome = 'Maraschi';
  title = 'Hello!';
  today = new Date();

  profile = { id: 10001, name: 'Jasmes Bond', role: 'Administrator'};
}
