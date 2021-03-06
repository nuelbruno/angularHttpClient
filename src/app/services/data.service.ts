import { NotFoundError } from './../Common/not-founderror';
import { Response } from '@angular/http/src/static_response';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../Common/app-error';
import { BadReqeustError } from '../Common/bad-request-error';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http
    .delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    } else if (error.status === 400) {
      return Observable.throw(new BadReqeustError());
    } else {
      return Observable.throw(new AppError(error));
    }
  }
}
