import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) { }

  translate(){
    return  this.http.get("assets/translate.json")
      .subscribe((res) => {

      });
  }
}
