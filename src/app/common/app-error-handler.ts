import { ErrorHandler } from '@angular/core/src/error_handler';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected error occured');
    console.log(error);
  }
}
