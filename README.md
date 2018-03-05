# Httpservice

- Fake HTTP: https://jsonplaceholder.typicode.com/

## Steps

- imports [ HttpModule]

## Code Sample

-  constructor(http: Http) {
-     http.get('https://jsonplaceholder.typicode.com/posts').subscribe(responce => {
-          this.post = responce.json();
-      });
-   }

-   createpost(input: HTMLInputElement) {
-     let data = {title: input.value};
-     this.http.post(this.url, JSON.stringify(data)).subscribe(responce => {
-             responce.json().id;
-   });

- updatePost(data) {
-    this.http.patch(this.url + '/' + data.id , JSON.stringify({isRead: true}))
-   .subscribe(responce => {
-         console.log(responce.json());
-    });
 - }

## Annotation

- <input   (keyup.enter)="createpost(title)" #title type="text">

-  createpost(title: HTMLInputElement) {
-  }

 ## To add data at the top of array use

- this.post.splice(0, 0, data);  

## Initializing this app module in local machine 

- 1: Clone repo

- git clone https://github.com/nuelbruno/angularHttpClient.git
2: Install packages

- npm install
- : Start server (includes auto refreshing) and gulp watcher

- npm start

## Moving file to another folder
- mkdir foldername
- mv post.service.* services
- mv setoffiles.* foldername

## Types of Error

- unexpected erro ( server offline, n/w down, unhandled expection)

- expected error
   - not found ( 404), already deleted
   - Bad requet (400), user already present

## RXjs Catch to catch error

- need to import catch operator
- to return obsrevale error in the catch, import observable
- import 'rxjs/add/operator/catch';
- import 'rxjs/add/observable/throw';
- import { Observable } from 'rxjs/Observable';
- import 'rxjs/add/operator/map';

## Global Error Handler 

-ErrorHandler class logs the error in server & console
- Create a class extends errorhandler and log all messages
- export class AppErrorHandler implements ErrorHandler { }
- providers: [
       { provide: ErrorHandler, useClass: AppErrorHandler}
  ],



