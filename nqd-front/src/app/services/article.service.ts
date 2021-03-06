import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  /** get All articles 
   * @route 
   * @param   
   */
  getAllArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>('http://localhost:5000/articles');
  }

  getArticleById(id): Observable<Article> {
    return this.http.get<Article>('http://localhost:5000/articles/' + id);
  }

  saveArticle(article: Article) {
    return this.http.post<Article>('http://localhost:5000/articles', article);

  }

  updateArticle(article: Article, id: string): Observable<Article> {
    if(!article.image) {
      article.image = null; 
    }
    return this.http.put<Article>('http://localhost:5000/articles/' + id, article);

  }

  deleteArticle(id: string) {
    return this.http.delete<Article>('http://localhost:5000/articles/' + id);

  }

}
