import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  router;
  constructor(private _router:Router) {
    this.router = "";
    this.router = _router.url;
  }
}
