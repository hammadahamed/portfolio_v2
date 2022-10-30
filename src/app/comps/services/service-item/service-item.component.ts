import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() padding = "0px";
  @Input() title = "";
  @Input() desc = "";
  constructor() { }

  ngOnInit(): void {
  }

}
