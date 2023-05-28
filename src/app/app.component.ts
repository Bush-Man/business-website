import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business-website';
  constructor(private location: Location) {}

  ngOnInit() {
    this.location.subscribe((location) => {
      if (location.hash) {
        this.location.replace(location.path);
      }
    });
  }

}
