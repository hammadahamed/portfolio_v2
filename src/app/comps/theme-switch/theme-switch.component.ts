import { Component, OnInit } from '@angular/core';
import { AppVariablesService } from 'src/app/app-variables.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  constructor(public appVariable: AppVariablesService) { }

  setTheme(): void {
    this.appVariable.switchTheme(!this.appVariable.darkTheme);
  }

}
