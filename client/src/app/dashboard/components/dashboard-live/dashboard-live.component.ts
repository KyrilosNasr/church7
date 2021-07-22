import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { LiveService } from './../../shared/services/live.service';
import { finalize } from 'rxjs/operators';
import { ImagesPopupComponent } from './../../shared/components/images-popup/images-popup.component';

@Component({
  selector: 'app-dashboard-live',
  templateUrl: './dashboard-live.component.html',
  styleUrls: ['./dashboard-live.component.scss']
})
export class DashboardLiveComponent implements OnInit {
  @ViewChild('imagesPopup') imagesPopup: ImagesPopupComponent;
  val:any;
  liveForm: FormGroup;
  submitted = false;

  baseurl = 'https://www.youtube.com/embed/';
  videoId: string;
  url: string;
  constructor(
    private formBuilder: FormBuilder,
    private _live: LiveService,
    private _toast: ToastrsService
  ) { }

  ngOnInit(): void {
    this.liveFormInit();
    this.getLive();
  }
  liveFormInit(){
    this.liveForm = this.formBuilder.group(
      {
        isActive:  [false, Validators.required],
        videoId: [null]
      }
    )
  }
  get f() { return this.liveForm.controls; };

  getLive(){
    this._live.getLive().subscribe(res => {
      this.liveForm.patchValue(res)
      this.getVideo()
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.liveForm.invalid) {
      this.submitted = false;
        return;
    }

    this._live.updateLive(this.liveForm.value).pipe(
      finalize(()=> {this.submitted = false})
    ).subscribe(res=> {
      this.getVideo()
      // display form values on success
      this._toast.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
    })

}

onReset() {
    this.submitted = false;
    this.liveForm.reset();
}

  handleChange(e: any) {
    let isChecked = e.checked;
}

getVideo(){
  let vid : string = this.liveForm.controls['videoId'].value
  if(vid && vid.includes('http')){
    vid = vid.split("?v=")[1]
    if(vid.includes("&list")){
      vid = vid.split("&list")[0]
    }
  }
  this.url = this.baseurl + vid;
  document.getElementsByTagName('iframe')[0].setAttribute('src', this.url)
}

selectImage(event: Event){
  this.imagesPopup.show(event)
}

}
