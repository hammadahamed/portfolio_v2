import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-works',
  templateUrl: './recent-works.component.html',
  styleUrls: ['./recent-works.component.scss'],
})
export class RecentWorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recentWorks: any = [
    {
      link: 'https://jsonvisualizer-v2.web.app/',
      assetPath: '../../../assets/jsonvisualizer-home.png',
    },
    {
      link: 'https://ai4infinity.web.app',
      assetPath: '../../../assets/ai4infinity-home.png',
    },
  ];
}
