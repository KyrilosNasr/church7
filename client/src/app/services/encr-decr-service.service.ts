import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EncrDecrServiceService {

  constructor() { }

  encode(str: any) {
    let value = str

    for (var i = 0; i < 10; i++){
      value = btoa(value ? value: '')
    }
    return value
    }

    decode(str: any) {
      let value = str

      for (var i = 0; i < 10; i++){
        value = atob(value ? value: '')
      }
      return value
      }
  }
