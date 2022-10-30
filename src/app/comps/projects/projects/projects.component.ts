import { Component, OnInit } from '@angular/core';
import { PlatformView, Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})



export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [
    new Project(
      "CashFlow",
      "In simple terms, this app is a mix of Khatabook, splitwise and Finance Calculators in one place. I'm developing this app as a hobby to prove clients that Complex UI/UX and logic (in other word, highly complex sofwares) are my favourite cup tea and I can nail them. \nWith Firebase authentication, persistance, Dark Theme.",
      [
        "/assets/cashflow/img1.jpg",
        "/assets/cashflow/img2.jpg",
        "/assets/cashflow/img3.jpg",
        "/assets/cashflow/img4.jpg",
        "/assets/cashflow/img5.jpg",
        "/assets/cashflow/img6.jpg",
        "/assets/cashflow/img7.jpg",
        "/assets/cashflow/img8.jpg",
        "/assets/cashflow/img9.jpg",
        "/assets/cashflow/img10.jpg",
        "/assets/cashflow/img11.jpg",
      ],
      ["Mobile App", "Inprogress", "Personal Product", "UI/UX", "Flutter"],
      PlatformView.mobile,
    ),
    new Project(
      "Agro Cloud",
      "This app is to monitor and administer one's angricultural land. Senors, motors and switches are connected to the microcontroller connected to the mobile app via internet. This is my University prroject that i took up to demosntrate my skills in Flutter (Mobile app), Firebase and microcontrollers.",
      [
        "/assets/agro_cloud/splash.jpg",
        "/assets/agro_cloud/home.jpg",
        "/assets/agro_cloud/sidedrawer.jpg",
        "/assets/agro_cloud/controlcenter.jpg",
        "/assets/agro_cloud/humidity.jpg",
        "/assets/agro_cloud/alllogs.jpg"
      ],
      ["Mobile App", "College Project", "Completed", "UI/UX", "Flutter", "Raspberry Pi", "Micro-controller"],
      PlatformView.mobile,
    ),
    new Project(
      "Mock Restaurant",
      "This is a simple restaurant menu ordering website design implementation along with a GAME to play in the waiting time. This was developed during an interview to demonstrate my expertise in plain Vanilla JS/HTML/CSS without any framwork. Development Duration - 8hrs (approx)",
      [
        "/assets/mock_restaurant/img1.png",
        "/assets/mock_restaurant/img2.png",
        "/assets/mock_restaurant/img3.png",
        "/assets/mock_restaurant/img4.png",
        "/assets/mock_restaurant/img5.png",
        "/assets/mock_restaurant/img6.png",
      ],
      ["Web App", "Vannila Javascript", "HTML / CSS", "UI/UX"],
      PlatformView.web,
    ),
  ];


}
