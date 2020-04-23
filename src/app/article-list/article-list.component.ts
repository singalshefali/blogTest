import { Component, OnInit } from '@angular/core';
import { Articles } from '../mock-articles';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = [];

  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    // this.articles = Articles;
    // console.log(this.articles);
    this._articleService.getArticles().subscribe(article => {
      // console.log(articles);
      this.articles = article;
    });

  }

}
