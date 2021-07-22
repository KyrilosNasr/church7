import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleriaModule } from 'primeng/galleria';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TextInputComponent } from './components/text-input/text-input.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

// materials
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoHttpLoader, TranslocoRootModule } from '../transloco/transloco-root.module';
import { translocoConfig, TranslocoModule, TranslocoService, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    TextInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule,
    InputSwitchModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    OverlayPanelModule,
    TableModule,
    PaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    CalendarModule,
    ConfirmDialogModule,
    MatDialogModule,
    TranslocoRootModule,
    TranslocoModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    GalleriaModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule,
    InputSwitchModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    TextInputComponent,
    OverlayPanelModule,
    TableModule,
    PaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    CalendarModule,
    ConfirmDialogModule,
    MatDialogModule,
    TranslocoModule,
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextInputComponent), multi: true },
    MatDatepicker,
    ConfirmationService,
    MatDialogModule,
    TranslocoService,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['ar'],
        defaultLang: 'ar',
        reRenderOnLangChange: true,
        prodMode: environment.production,
        flatten: {
          aot: environment.production
        }
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class SharedModule { }
