import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string): void {
    window.open(url, "_blank");
  }

}
