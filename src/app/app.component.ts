import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'allTraineeStars';
  webpages = [
    { title: 'Simon', url: 'https://simonexsitec.github.io/webtest/' },
    { title: 'test', url: 'https://simonexsitec.github.io/webtest/' },
  ];
}
