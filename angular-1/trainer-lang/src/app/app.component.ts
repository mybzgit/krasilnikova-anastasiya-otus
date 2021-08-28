import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainer-lang';
  selected: string = "active";

  recentlyAdded: boolean = true;
  execise: boolean = false;
  settings: boolean = false;

  select(value: string) {
    if (value == "ra") {
      this.recentlyAdded = true;
      this.execise = false;
      this.settings = false;
    }
    if (value == "exc") {
      this.recentlyAdded = false;
      this.execise = true;
      this.settings = false;
    }
    if (value == "set") {
      this.recentlyAdded = false;
      this.execise = false;
      this.settings = true;
    }
  }
}