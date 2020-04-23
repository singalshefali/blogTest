import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { Articles } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [];

  constructor() { }

  getArticles(): Observable<Article[]> {
    this.articles = Articles;
    return of(this.articles);
  }
}
