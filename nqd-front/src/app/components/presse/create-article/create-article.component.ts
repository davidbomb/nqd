import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ToastrService } from 'ngx-toastr';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  /** Formulaire */
  articleForm: FormGroup;
  /** Modele dans lequel on stocke les données du form */
  model: Article; 
  /** Le modele une fois l'article soumis (il contient donc _id) */
  submittedModel: Article; 
  /** Pour choisir d'afficher ou non le preview de l'article crée */
  submitted: boolean = false;
  /** Pour desactiver le boutton Sauvegarder */
  submitClicked: boolean = false;
  /** Pour savoir si on est en mode edit ou create */
  edit: boolean = false;
  /** Pour desactiver le boutton Sauvegarder */
  editClicked: boolean = false;
  /** Fichier image uploadé par l'user + metadata */
  selectedFile: ImageSnippet;
  /** Boolean to display loading when necessary */
  loading: boolean = false;   
  /** Boolean to display loading on the image upload */
  imageLoading: boolean = false; 
  /** Rich text Editor */
  public Editor = ClassicEditor;
  
  constructor(private formBuilder: FormBuilder,
              private articleService: ArticleService,
              private toastr: ToastrService) { }
  
  ngOnInit() {
      
    this.model = new Article(null, null, null, null, null);
                  
                     
      this.articleForm = this.formBuilder.group({
        title:        [this.model.title, Validators.required],
        category:     [this.model.category, Validators.required],
        description:  [this.model.description, Validators.required],
        content:      [this.model.content, Validators.required],
        image:        [this.model.image]
      });
  }

  onSubmit({ value, valid }: { value: Article, valid: boolean }) {
    this.loading = true;
    if(!this.edit) {
      this.submitClicked = true
      this.editClicked = false; 
      value.image = this.model.image || null;
      console.log(value);
      this.articleService.saveArticle(value).subscribe(
        res => {
          this.loading = false;
          this.toastr.success("L'article à bien été enregistré");
          this.submitted = true;
          this.submittedModel = value;
          this.submittedModel._id = res._id;   
          
        },
        error => {
          this.loading = false;
          this.toastr.error("L'article n'à pas pu être enregistré", error.status)
        }
      )
    } else if(this.edit) {
      this.submitClicked = false;
      this.editClicked = false; 
      value.image = this.model.image;

      this.articleService.updateArticle(value, this.submittedModel._id).subscribe(
        res => {
          this.loading = false;
          this.toastr.success("L'article à bien été mis à jour");
          this.submitted = true;
          this.submittedModel = value; 
          this.submittedModel._id = res._id;   
        },
        error => {
          this.loading = false;
          this.toastr.error("L'article n'à pas pu être mis à jour", error.status)
        }
      )
    }
  }

  /**
   * This function is called each time a new image is uploaded
   * It converts the new image into a ByteArray and stores it into the model
   * @param imageInput 
   */
  processFile(imageInput: any) {
    this.imageLoading = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.model.image = this.selectedFile.src;
      this.onSuccess();
    });
    reader.readAsDataURL(file);       // Je sais pas à quoi cette ligne sert mais ca fonctionne très bien donc on laisse comme ca 
  }


  onSuccess() {
    this.imageLoading = false;
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  /** Unused but might be useful in the future */
  onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  clearImage() {
    // this.selectedFile = new ImageSnippet('', null);
    // this.selectedFile.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/"
    // this.processFile(new File([], ''));
  }




}
