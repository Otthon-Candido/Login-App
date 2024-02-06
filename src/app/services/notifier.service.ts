import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toastr: ToastrService) {}

  Success(body: any, title: any ) {
    this.toastr.success(body, title);
  }

  Error(body: any, title: any ) {
    this.toastr.error(body, title);
  }

  Warning(body: any, title: any ) {
    this.toastr.warning(body, title);
  }
}
