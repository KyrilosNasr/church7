import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { PriestlyRank, ToastrMessages } from 'src/app/shared/enums/enums';
import { ICreateGalleryImage, IGalleryImage } from 'src/app/shared/models/gallery';
import { GalleryService } from './../../../../services/gallery.service';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent extends BaseComponent implements OnInit {

  galleryForm: FormGroup;
  submitted = false;
  id: number;
  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _gallery: GalleryService
  ) {
    super(injector)

  }

  ngOnInit(): void {
    this.galleryFormInit()
    this.id = this._route.snapshot.params['id']
    if(this.id) {
      this._gallery.getById(this.id).subscribe((res: ICreateGalleryImage) => {
        this.galleryForm.patchValue(res)
      })
    }
  }

  galleryFormInit() {
    this.galleryForm = this.formBuilder.group(
      {
        id: [null],
        imageId: [null, [Validators.required]],
        displayOrder: [1000],

      }
    )
  }
  get f() { return this.galleryForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.galleryForm.invalid) {
      this.submitted = false;
      return;
    }

    this._gallery.CreateOrUpdateImage(this.galleryForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')

      },
      err => {console.log(err)},
      ()=>{this._router.navigate(["/dashboard/gallery"])})

  }

}
