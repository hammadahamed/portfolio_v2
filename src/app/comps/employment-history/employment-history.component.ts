import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss'],
})
export class EmploymentHistoryComponent implements OnInit {
  screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      // Do something for small screens
    } else {
      // Do something for larger screens
    }
  }

  employments: any = [
    {
      org: 'Pando Corp',
      year: 'Oct, 2022 - Present',
      duration: '',
      logo: '/assets/orgs/pando_logo.jpg',
      designation: 'Associate Software Developer',
      current: true,
    },
    {
      org: 'Applied Materials',
      year: 'Aug, 2021 - Oct, 2022',
      duration: '1y 2m',
      logo: '/assets/orgs/amat_logo.jpeg',
      designation: 'Associate Software Engineer',
    },
    {
      org: 'ZOHO Corp',
      year: 'Feb, 2021 - May, 2021',
      duration: '',
      logo: '/assets/orgs/zoho_logo.png',
      designation: 'Intern',
    },
    {
      org: 'Swarashiya Solutions',
      year: 'Feb, 2021 - May, 2021',
      duration: '',
      logo: '/assets/orgs/sawarashiya_logo.jpg',
      designation: 'Intern',
    },
  ];

  get getLineLength() {
    console.log('inner width ', window.innerWidth);
    let factor = this.screenWidth <= 768 ? 175 : 250;
    if (this.screenWidth > 1470) factor = 264;
    return this.employments.length * factor + 'px';
  }
}
