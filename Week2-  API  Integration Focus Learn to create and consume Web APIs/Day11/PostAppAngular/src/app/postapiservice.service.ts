import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostapiserviceService {

  private appUrl = 'https://localhost:7270/api/Posts';

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.appUrl);
  }

  getPost(id:number):Observable<Post>{

    return this.http.get<Post>(`${this.appUrl}/${id}`)
  }

  createPost(newPost:Post):Observable<Post>{

    return this.http.post<Post>(this.appUrl,newPost);
  }

  updatePost(updatedPost:Post):Observable<Post>{

return this.http.put<Post>(`${this.appUrl}/${updatedPost.id}`,updatedPost);
  };

  deletePost(id:number):Observable<any>{

    return this.http.delete(`${this.appUrl}/${id}`);
  }


}
