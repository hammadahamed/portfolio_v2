import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { PlatformView, Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {}

  visibleClassName: string = 'make-visible';

  ngAfterViewInit(): void {
    var containers: any = document.getElementsByClassName('project-images');

    containers = [...containers];

    containers.forEach((container: any) => {
      this.chevronHandler(container);

      // The below sets up right chevrons to be shown initilly to scroll
      // to right only if it is wide enough
      // timeout is given since for some reason., the scroll width is not correct
      // timout MATCHES the duration of intro animation
      setTimeout(() => {
        const projectId = container.attributes.projectid.value;
        const outerDiv = document.getElementById(
          `project-image-outer-${projectId}`
        );

        if (outerDiv && outerDiv?.scrollWidth > outerDiv?.clientWidth) {
          const chevronLeft = document.getElementsByClassName(
            `scroll-chevron-left-${projectId}`
          )[0];
          const chevronRight = document.getElementsByClassName(
            `scroll-chevron-right-${projectId}`
          )[0];

          this.showRightCheveron(chevronLeft, chevronRight);
        }
      }, 3000);
    });

    window.addEventListener('DOMContentLoaded', function () {
      var divElement = document.getElementById('myDiv');

      if (divElement) {
        var isHorizontallyScrollable =
          divElement.scrollWidth > divElement.clientWidth;
        console.log('Horizontally scrollable:', isHorizontallyScrollable);
      }
    });
  }

  // This methods takes care of showing and hiding the chevrons at their respective
  // horizontal extents
  chevronHandler(container: any): void {
    container.addEventListener('scroll', () => {
      var projectId = container.attributes.projectid.value;
      var outerDiv = document.getElementById(
        `project-image-outer-${projectId}`
      );

      const chevronLeft = document.getElementsByClassName(
        `scroll-chevron-left-${projectId}`
      )[0];
      const chevronRight = document.getElementsByClassName(
        `scroll-chevron-right-${projectId}`
      )[0];

      if (outerDiv && outerDiv?.scrollWidth > outerDiv?.clientWidth) {
        const atRightExtent: boolean =
          outerDiv?.scrollLeft >=
          outerDiv?.scrollWidth - outerDiv?.clientWidth - 10;

        const atLeftExtent: boolean = outerDiv?.scrollLeft <= 10;

        if (atLeftExtent) {
          this.showRightCheveron(chevronLeft, chevronRight);
        } else if (atRightExtent) {
          this.showLeftCheveron(chevronLeft, chevronRight);
        }
      } else {
        console.log('outerDiv not Found !');
      }
    });
  }

  showLeftCheveron(leftChevron: Element, rightChevron: Element): void {
    leftChevron.classList.add(this.visibleClassName);
    rightChevron.classList.remove(this.visibleClassName);
  }

  showRightCheveron(leftChevron: Element, rightChevron: Element): void {
    rightChevron.classList.add(this.visibleClassName);
    leftChevron.classList.remove(this.visibleClassName);
  }

  projects: Project[] = [

    new Project(
      'CashFlow',
      "In simple terms, this app is a mix of Khatabook, splitwise and Finance Calculators in one place. I'm developing this app as a hobby to prove clients that Complex UI/UX and logic (in other word, highly complex sofwares) are my favourite cup tea and I can nail them. \nWith Firebase authentication, persistance, Dark Theme.",
      [
        '/assets/cashflow/img1.jpg',
        '/assets/cashflow/img2.jpg',
        '/assets/cashflow/img3.jpg',
        '/assets/cashflow/img4.jpg',
        '/assets/cashflow/img5.jpg',
        '/assets/cashflow/img6.jpg',
        '/assets/cashflow/img7.jpg',
        '/assets/cashflow/img8.jpg',
        '/assets/cashflow/img9.jpg',
        '/assets/cashflow/img10.jpg',
        '/assets/cashflow/img11.jpg',
      ],
      ['Mobile App', 'In-progress', 'Personal Product', 'UI/UX', 'Flutter'],
      PlatformView.mobile
    ),
    new Project(
      'Agro Cloud',
      "This app is to monitor and administer one's agricultural land. Senors, motors and switches are connected to the micro-controller connected to the mobile app via internet. This is my University project that i took up to demosntrate my skills in Flutter (Mobile app), Firebase and microcontrollers.",
      [
        '/assets/agro_cloud/splash.jpg',
        '/assets/agro_cloud/home.jpg',
        '/assets/agro_cloud/sidedrawer.jpg',
        '/assets/agro_cloud/controlcenter.jpg',
        '/assets/agro_cloud/humidity.jpg',
        '/assets/agro_cloud/alllogs.jpg',
      ],
      [
        'Mobile App',
        'College Project',
        'Completed',
        'UI/UX',
        'Flutter',
        'Raspberry Pi',
        'Micro-controller',
      ],
      PlatformView.mobile
    ),
    new Project(
      'Mock Restaurant',
      'This is a simple restaurant menu ordering website design implementation along with a GAME to play in the waiting time. This was developed during an interview to demonstrate my expertise in plain Vanilla JS/HTML/CSS without any framework. Development Duration - 8hrs (approx)',
      [
        '/assets/mock_restaurant/img1.png',
        '/assets/mock_restaurant/img2.png',
        '/assets/mock_restaurant/img3.png',
        '/assets/mock_restaurant/img4.png',
        '/assets/mock_restaurant/img5.png',
        '/assets/mock_restaurant/img6.png',
      ],
      ['Web App', 'Vannila Javascript', 'HTML / CSS', 'UI/UX'],
      PlatformView.web
    ),
  ];
}
