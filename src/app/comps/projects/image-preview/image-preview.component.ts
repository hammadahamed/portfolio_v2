import { Component, Input, OnInit } from '@angular/core';
import { AppVariablesService } from 'src/app/app-variables.service';
import { PlatformView } from 'src/app/models/project';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent implements OnInit {
  @Input() image: String = '';
  bg: any;

  constructor(private appVariables: AppVariablesService) {}

  ngOnInit(): void {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        this.appVariables.showImagePreviewModal = false;
      }
    };
  }

  closePreview(){
    this.appVariables.showImagePreviewModal = false;
  }
  get showImagePreview() {
    return this.appVariables.showImagePreviewModal;
  }

  get imageList() {
    return this.appVariables.previewData.imageList;
  }


  public getPlatformClass(
    platform: PlatformView = this.appVariables.previewData.platform
  ): string {
    const className = 'platform-view-';
    if (platform === PlatformView.mobile) {
      return className + 'mobile';
    } else {
      return className + 'web';
    }
  }
}
