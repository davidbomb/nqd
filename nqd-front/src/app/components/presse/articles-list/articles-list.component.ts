import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {



  articles: Array<Article>;

  constructor(private articleService: ArticleService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.articles = new Array<Article>();
    this.articleService.getAllArticles().subscribe(
      articles => {
        this.articles = articles;

      },
      err => {
        this.toastr.error("Impossible d'afficher les articles", err.code)

      }
    )
  }

}
