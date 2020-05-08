import { Component, OnInit, Inject } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/models/article';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  id: string;
  loading: boolean;

  constructor(public dialogRef: MatDialogRef<DeleteArticleComponent>,
              private toastr: ToastrService,
              /** Permet d'injecter les données dans ce composant modal depuis le parent */
              @Inject(MAT_DIALOG_DATA) public data: any,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.id = this.data.id;
  }

  onDeleteArticle() {
    this.loading = true;
    this.articleService.deleteArticle(this.id).subscribe(
      success => {
        this.toastr.success("L'article a été supprimé avec succès.");
        this.loading = false;
        this.dialogRef.close(this.id);
      },
      error => {
        this.loading = false;
        if(error.status === 404) {
          this.toastr.error("Cet article n'existe pas ou a déjà été supprimé", error.status);  
        } else {
          this.toastr.error("Erreur lors de la suppression de l'article", error.status);  
        }

      }
    )
  }

  
  onCancel(): void {
    this.dialogRef.close();
  }

}
