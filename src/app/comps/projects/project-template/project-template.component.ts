import { Component, Input, OnInit } from '@angular/core';
import { AppVariablesService } from 'src/app/app-variables.service';
import { PlatformView, Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss']
})
export class ProjectTemplateComponent implements OnInit {
  @Input() project: Project = new Project("", "", [], [], PlatformView.mobile);
  @Input() index: number = 0;

  colorPalette = ["#78909C", "#26A69A", "#FF7043", "#5C6BC0", "#9CCC65"];
  labelColor: string[] = [];
  constructor(private appVariables: AppVariablesService) { }

  ngOnInit(): void {
    this.project.labels.forEach((e) => {
      this.labelColor.push(this.colorPalette[this.randomInt()])
    }
    );
    console.log(this.project.projectName, this.labelColor)
  }

  prevRandomInt: number = 0;
  randomInt(): number {
    var num = Math.floor(Math.random() * 5);
    this.prevRandomInt = this.prevRandomInt == num ? this.randomInt() : num;
    return this.prevRandomInt;
  }

  public getPlatformClass(platform: PlatformView): string {
    const className = "platform-view-";
    if (platform === PlatformView.mobile) {
      return className + "mobile";
    }
    else {
      return className + "web";
    }
  }

  public openImagePreview(currentImageIndex: number ) {
    this.appVariables.showImagePreviewModal = true;
    this.appVariables.previewData = {
      imageList: this.project.imageList,
      currentImage: currentImageIndex,
      platform: this.project.platformView,
    }
  }

}
