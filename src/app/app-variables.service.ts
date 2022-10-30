import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppVariablesService {



  darkTheme: boolean = false;
  darkThemeLocalRef: string = 'dark-theme';

  switchTheme(darkTheme: boolean): void {
    const sunMoon = document.getElementsByClassName("sun-moon-wrap");

    // switching theme
    if (darkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    this.darkTheme = darkTheme;
    sunMoon[0].classList.toggle("dark-switch", this.darkTheme);

    // persisting theme by saving to local storage
    localStorage.setItem(this.darkThemeLocalRef, String(darkTheme));

  }
}
