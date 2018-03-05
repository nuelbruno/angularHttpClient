import { AppError } from './../Common/app-error';
import { NotFoundError } from './../Common/not-founderror';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Body } from '@angular/http/src/body';
import { error } from 'selenium-webdriver';
import { Response } from '@angular/http/src/static_response';
import { BadReqeustError } from '../Common/bad-request-error';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  post: any[];

  constructor(private httpService: PostService) {}

  createpost(input: HTMLInputElement) {
    const data = { title: input.value };
    input.value = '';

    this.httpService.create(data)
    .subscribe(
      responce => {
        data['id'] = responce.id;
        this.post.splice(0, 0, data);
      },
      (eror: AppError) => {
        if (eror instanceof BadReqeustError) {
          alert('This post is already exist');
        } else {
          throw eror;
        }
      }
    );
  }

  updatePost(data) {
    this.httpService.update(data)
    .subscribe(responce => {
      console.log(responce);
    });
  }

  deletePost(data) {
    this.httpService.delete(data.id)
    .subscribe(
      () => {
        const index = this.post.indexOf(data);
        this.post.splice(index, 1);
      },
      (eror: AppError) => {
        if (eror instanceof NotFoundError) {
          alert('This post is already deleted');
        } else {
          throw eror;
        }
      }
    );
  }

  ngOnInit() {
    this.httpService.getAll().subscribe(post => (this.post = post));
  }
}
