import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface IToastr {
  type: string, summary: string, detail: string
}
@Injectable({
  providedIn: 'root'
})
export class ToastrsService {

  constructor(
    private messageService: MessageService
  ) { }

  addSingle(type: string, summary: string, detail: string) {
    this.messageService.add({ severity: type, summary: summary, detail: detail });
  }
  addMultiple(toastrs: IToastr[]) {
    this.messageService.addAll(toastrs);
  }

  clear() {
    this.messageService.clear();
  }
}
