import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this._route.params);
    this._route.params.subscribe(params => {
      this.article.key = params.key;
    });
  }



}
