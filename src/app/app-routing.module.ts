import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'article-list', component: ArticleListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: ArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
