import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public book: any[] = [];
  
  constructor() { 
  }
  
  setMessage(data: any[]) {
    this.book = data;
    // alert("Shared1 " + JSON.stringify(this.book));
  }
  
  getMessage() {
    return JSON.stringify(this.book);
  }
}
