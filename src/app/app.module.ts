import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBannerComponent } from './comps/title-banner/title-banner.component';
import { SocialButtonsComponent } from './comps/social-buttons/social-buttons.component';
import { MatCardModule } from '@angular/material/card';
import { TopBarComponent } from './comps/top-bar/top-bar.component';
import { ThemeSwitchComponent } from './comps/theme-switch/theme-switch.component';
import { ProjectsComponent } from './comps/projects/projects/projects.component';
import { ProjectTemplateComponent } from './comps/projects/project-template/project-template.component';
import { ServicesComponent } from './comps/services/services.component';
import { ServiceItemComponent } from './comps/services/service-item/service-item.component';
import { SkillsComponent } from './comps/skills/skills.component';
import { ImagePreviewComponent } from './comps/projects/image-preview/image-preview.component';
import { FooterComponent } from './comps/footer/footer.component';
import { EmploymentHistoryComponent } from './comps/employment-history/employment-history.component';
import { HomeComponent } from './home/home.component';
import { RecentWorksComponent } from './comps/recent-works/recent-works.component';
// import { LottieModule } from 'ngx-lottie';

// export function playerFactory(): any {
//   return import('lottie-web');
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleBannerComponent,
    SocialButtonsComponent,
    TopBarComponent,
    ThemeSwitchComponent,
    ProjectsComponent,
    ProjectTemplateComponent,
    ServicesComponent,
    ServiceItemComponent,
    SkillsComponent,
    ImagePreviewComponent,
    FooterComponent,
    EmploymentHistoryComponent,
    RecentWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
