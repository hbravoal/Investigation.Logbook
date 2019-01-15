import { Page404Component } from './Components/Page/page404/page404.component';
import { HomeBlogComponent } from './Components/Blog/home-blog/home-blog.component';
import { HomeCurriculumComponent } from './Components/Curriculum/home-curriculum/home-curriculum.component';
import { HomeComponent } from './Components/Page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'Home', component : HomeComponent
  },
  {
    path : 'Curriculum' , component : HomeCurriculumComponent
  },
  {
    path : 'Blog' , component : HomeBlogComponent
  }
  , {
    path : '**' , component : Page404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
