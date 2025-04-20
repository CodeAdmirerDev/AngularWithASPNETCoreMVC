import { Component, OnInit } from '@angular/core';
import { PostapiserviceService } from '../postapiservice.service';
import { Post } from '../Post';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit{

posts:Post[] =[];

  constructor(private postApiService:PostapiserviceService){

  }

  ngOnInit(): void {
  
    this.postApiService.getPosts().subscribe({

      next:(data)=>this.posts= data,
      error: (err)=> console.error('Error loading posts:',err),
      complete: ()=> console.log('request completed')
    });
  
  }


}
