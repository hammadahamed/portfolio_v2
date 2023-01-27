import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AppVariablesService } from './app-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private appVariables: AppVariablesService) { };

  ngOnInit(): void {
    const themeData = localStorage.getItem(this.appVariables.darkThemeLocalRef);
    const darkTheme = themeData == 'true';
    this.appVariables.switchTheme(darkTheme);
    // this.mouseNegator();
  }

  mouseNegator() {
    window.addEventListener('scroll', function() {
      var dom = this.document.getElementById('root-wrapper');
      if(dom) {
        dom.style.overflow = "hidden";
        setTimeout(function() {
          if (dom)
          dom.style.overflow = "auto";
      }, 3000);
      }
    });
  }




}


