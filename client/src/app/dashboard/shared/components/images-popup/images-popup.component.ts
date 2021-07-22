import { Component, OnInit, Output, ViewChild, Injector, EventEmitter, forwardRef, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { IImageAssets, IImageAssetsParams } from 'src/app/shared/models/image-assets';
import { ImageAssetsService } from './../../../../services/image-assets.service';
import { IPagination } from './../../../../shared/models/response-result';
import { BaseComponent } from './../../../../shared/components/base/base.component';
import { finalize, take } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-images-popup',
  templateUrl: './images-popup.component.html',
  styleUrls: ['./images-popup.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImagesPopupComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useValue: (_: any) => {
        // console.log(_)
        return null;
      },
      multi: true,
    },
  ]
})
export class ImagesPopupComponent extends BaseComponent implements OnInit {
  @ViewChild('op') op: OverlayPanel;
  @Output('onSelectImage') onSelectImage = new EventEmitter;
  @Input() label: string;
  @Input("formGroup") formGroup: FormGroup;
  @Input() controlName: string;
  @Input() isRequired: boolean = false;
  // @Input()

  active: boolean = false;
  tableLoading: boolean = true;
  selectedImage: IImageAssets;
  tableInit = {
    first: 1,
    globalFilter: null,
    multiSortMeta: undefined,
    rows: 3,
    sortField: undefined,
    sortOrder: 1,
  };
  totalRecords: number = 0;
  pageIndex: number = 1
  images: IImageAssets[];

  constructor(
    injector: Injector,
    private _imageAssets: ImageAssetsService
  ) {
    super(injector)
  }
  getSelectedImg() {
    this.formGroup.controls[this.controlName].valueChanges.pipe(take(1)).subscribe(() => {
      const imgId = this.formGroup.controls[this.controlName].value
      if (imgId) {
        this._imageAssets.getImgById(imgId).subscribe(res => this.selectedImage = res)
      }
    })
  }

  ngOnInit(): void {
    if (this.op) {
      this.getImages(this.tableInit);
    }
    this.getSelectedImg()
  }

  show(event: Event) {
    this.op.toggle(event)
  }

  hide() {
    this.op.hide()
  }
  getImages(event: LazyLoadEvent) {
    this.tableLoading = true
    let params: IImageAssetsParams = {
      PageIndex: this.pageIndex,
      PageSize: 3,
      Sort: event.sortField,
      Search: event.globalFilter,
    }
    this._imageAssets.getAll(params).pipe(finalize(() => this.tableLoading = false)).subscribe(
      (res: IPagination<IImageAssets>) => {
        this.images = res.result
        this.totalRecords = res.count;
      }
    )

  }

  paginate(event: any) {
    this.pageIndex = event.page + 1
    this.getImages(this.tableInit)
  }
  onRowSelect(event: any) {
    this.onSelectImage.emit(event)
    this.setValue(event.data.id)
    this.hide()
  }

  setValue(id: number | undefined) {
    if (id) this.formGroup.controls[this.controlName].patchValue(id)
  }



  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  public uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();

    formData.set('file', fileToUpload, fileToUpload.name);

    this._imageAssets.upload(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 0));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';

          this.onUploadFinished.emit(event.body);
          let body: any = event.body;
          const domain = event.url?.split('/api')[0]
          const path = body.img?.imgUrl?.split('Content')[1]
          body.img.imgUrl = domain + "/" + path
          this.selectedImage = body.img
          this.onSelectImage.emit(this.selectedImage)
          if (this.selectedImage) {
            this.setValue(this.selectedImage.id)
          }
          this.hide()
        }
      });
  }

}
