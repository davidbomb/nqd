import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  articleForm: FormGroup;
  model: Article; 
  submittedModel: Article; 
  submitted: boolean = false;
  edit: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
              private articleService: ArticleService) { }
  
  ngOnInit() {
      
    this.model = new Article(null, null, null, null, null);
                  
                     
      this.articleForm = this.formBuilder.group({
        title:        [this.model.title, Validators.required],
        category:     [this.model.category, Validators.required],
        description:  [this.model.description, Validators.required],
        content:      [this.model.content, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Article, valid: boolean }) {
    if(!this.edit) {
      this.articleService.saveArticle(value).subscribe(
        res => {
          this.submitted = true;
          this.submittedModel = value;
          this.submittedModel._id = res._id    
        },
        err => {
          console.log(err)
        }
      )
    } else if(this.edit) {
      this.articleService.updateArticle(value, this.submittedModel._id).subscribe(
        res => {
          this.submitted = true;
          this.submittedModel = value; 
          this.submittedModel._id = res._id   
        },
        err => {
          console.log(err)
        }
      )
    }
    

    
  }
}
