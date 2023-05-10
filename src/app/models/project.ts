
export enum PlatformView {
    mobile,
    web
}

export class Project {
  id: string;
    constructor(
        public projectName: string,
        public description: string,
        public imageList: string[],
        public labels: string[],
        public platformView: PlatformView,
    ) {
      this.id = projectName.trim().split(' ').join('_');
     };
}
