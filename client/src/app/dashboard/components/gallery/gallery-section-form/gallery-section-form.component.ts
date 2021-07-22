import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-gallery-section-form',
  templateUrl: './gallery-section-form.component.html',
  styleUrls: ['./gallery-section-form.component.scss']
})
export class GallerySectionFormComponent implements OnInit {

  gallerySecForm: FormGroup;
  submitted = false;

  constructor(
    private _gallery: GalleryService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
  ) { }

  ngOnInit(): void {
    this.gallerySecFormInit()
  }

  gallerySecFormInit() {
    this.gallerySecForm = this.formBuilder.group(
      {
        bannerId: [null, Validators.required]

      }
    )
  }
  get f() { return this.gallerySecForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.gallerySecForm.invalid) {
      this.submitted = false;
      return;
    }

    this._gallery.createOrUpdateSec(this.gallerySecForm.value)
      .pipe(
        finalize(() => { this.submitted = false })
      ).subscribe(res => {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.gallerySecForm.reset();
      })
  }

}
