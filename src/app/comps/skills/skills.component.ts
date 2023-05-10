import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public skillPics = [
    "/assets/skills/angularjs.svg",
    "/assets/skills/flutter.svg",
    "/assets/skills/firebase.svg",
    "/assets/skills/html.svg",
    "/assets/skills/css.svg",
    "/assets/skills/javascript.svg",
    "/assets/skills/sass.svg",
    "/assets/skills/threejs.svg",
    "/assets/skills/dart.svg",
    "/assets/skills/nodejs.svg",
    "/assets/skills/typescript.svg",
    "/assets/skills/linux.png",
    "/assets/skills/python.svg",
  ]
}
