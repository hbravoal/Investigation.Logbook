import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCurriculumComponent } from './Components/Curriculum/home-curriculum/home-curriculum.component';
import { DetailsCurriculumComponent } from './Components/Curriculum/details-curriculum/details-curriculum.component';
import { HomeBlogComponent } from './Components/Blog/home-blog/home-blog.component';
import { DetailsBlogComponent } from './Components/Blog/details-blog/details-blog.component';
import { NavbarComponent } from './Components/Page/navbar/navbar.component';
import { FooterComponent } from './Components/Page/footer/footer.component';
import { SliderComponent } from './Components/Page/slider/slider.component';
import { HomeComponent } from './Components/Page/home/home.component';
import { Page404Component } from './Components/Page/page404/page404.component';
import { LearnMoreComponent } from './Components/Page/learn-more/learn-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCurriculumComponent,
    DetailsCurriculumComponent,
    HomeBlogComponent,
    DetailsBlogComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    Page404Component,
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
