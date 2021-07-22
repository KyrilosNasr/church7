import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import {ToastModule} from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [ServerErrorComponent, NotFoundComponent],
  imports: [
CommonModule,
    RouterModule,
    ToastModule,
    NgxSpinnerModule
  ],
  providers:[MessageService],
  exports: [
    ToastModule,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
