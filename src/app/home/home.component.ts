import { Component, OnInit } from '@angular/core';
import { AppVariablesService } from '../app-variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  path: string = '';
  constructor(private appVariables: AppVariablesService) {
    this.path = window.location.pathname as string;
  }

  ngOnInit(): void {
    const themeData = localStorage.getItem(this.appVariables.darkThemeLocalRef);
    const darkTheme = themeData == 'true';
    this.appVariables.switchTheme(darkTheme);
    // this.mouseNegator();
  }

  mouseNegator() {
    var dom = document.getElementById('root-wrapper');
    if (dom) {
      dom.style.overflow = 'hidden';
      setTimeout(function () {
        if (dom) dom.style.overflow = 'auto';
      }, 3000);
    }
  }

  showServices() {
    console.log('path', this.path, this.path.includes('client'));
    return this.path.includes('client');
  }
}
