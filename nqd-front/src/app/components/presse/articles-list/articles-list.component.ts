import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {



  articles: Array<Article>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = new Array<Article>();
    this.articleService.getAllArticles().subscribe(
      articles => {
        this.articles = articles;

      },
      err => {

      }
    )
  }

}
