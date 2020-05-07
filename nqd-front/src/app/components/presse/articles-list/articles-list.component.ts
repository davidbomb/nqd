import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';
import * as _ from 'lodash';




@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  editClicked: boolean = false;
  deleteClicked: boolean = false;

  articles: Array<Article>;

  constructor(private articleService: ArticleService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.articles = new Array<Article>();
    this.articleService.getAllArticles().subscribe(
      articles => {
        this.articles = articles;

      },
      error => {
        this.toastr.error("Impossible d'afficher les articles", error.status)

      }
    )
  }

  openDeleteArticleModal(article: Article): void {
    const dialogRef = this.dialog.open(DeleteArticleComponent, {
      data: {
        // listeClasses: this.classes,
        id: article._id
      },
      minWidth: '450px',
      maxWidth: '600px'
    });

    dialogRef.afterClosed()
      .subscribe(
        id => {
          console.log(this.articles.length)
          this.articles.filter(a => {
            _.remove(this.articles, function(a) {
              return a._id === id; 
            })  
          });
          console.log(this.articles.length)

        },
        err => {

        });
  }

}
