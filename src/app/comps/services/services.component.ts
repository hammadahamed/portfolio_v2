import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  data = [
    {
      title: 'Mobile Apps',
      desc: 'These are simple / complex mobile apps for Android & iOS',
    },
    {
      title: 'Web Apps',
      desc: 'These are web apps, often complex and they are typically the products which will then be published for customers',
    },
    {
      title: '3D / 2D Websites',
      desc: 'These are simple but highly attractive Landing pages for businesses.',
    },
    {
      title: 'Fix Your Apps',
      desc: 'Fix the bugs, defects,  regression etc.., in your existing application (mobile / web).',
    },
    {
      title: 'Add New Feature',
      desc: 'Add new feature, Integrate new service or modify the look, feel and behaviour of your existing application (mobile / web).',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
