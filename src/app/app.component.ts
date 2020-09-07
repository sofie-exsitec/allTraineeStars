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
    {
      title: 'Nicks Sida',
      url: 'https://pseudonyman.github.io/',
    },
    {
      title: 'Albins Sida',
      url: './assets/AlbinsHemsida/index.html',
    },
    {
      title: 'Emelies Sida',
      url: './assets/EmeliesHemsida/Hemsida.html',
    },
    {
      title: 'Marcus Sida',
      url: './assets/MarcusHemsida/index.html',
    },
    {
      title: 'Olles Sida',
      url: './assets/OllesHemsida/index.html',
    },
    {
      title: 'Malins Sida',
      url: './assets/MalinsHemsida/test.html',
    },
    {
      title: 'Amandas Sida',
      url: './assets/AmandasHemsida/index.html',
    },
    {
      title: 'Vendelas Sida',
      url: './assets/VendelasHemsida/index.html',
    },
    {
      title: 'Majas Sida',
      url: './assets/MajasHemsida/index.html',
    },
  ];
}
