export enum PlatformView {
    mobile,
    web
}

export class Project {
    constructor(
        public projectName: string,
        public description: string,
        public imageList: string[],
        public labels: string[],
        public platformView: PlatformView,
    ) { };
}