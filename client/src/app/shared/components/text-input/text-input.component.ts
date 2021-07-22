import { ContentChild } from '@angular/core';
import { Component, ElementRef, Input, OnInit, Self, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextInputComponent implements OnInit {
  @ViewChild('input', {static: true}) input: ElementRef;
  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl: MatFormFieldControl<any>;

  @ViewChild('materialFormField', { static: true })
  public matFormField: MatFormField;

  @Input() public control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() label = 'string';
  @Input() icon : string;
  @Input() public appearance: 'outline' | 'fill' | 'standard' | 'legacy' = 'standard';



  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  public ngOnInit() {

    this.matFormField._control = this.formFieldControl;
    const control = this.controlDir.control;
    const validators = (control && control.validator) ? [control.validator] : [];
    const asyncValidators = (control && control.asyncValidator) ? [control.asyncValidator] : [];

    if(control){
      control.setValidators(validators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
    }
  }

  // ngOnInit(): void {
  //   const control = this.controlDir.control;
  //   console.log(control)
  //   const validators = (control && control.validator) ? [control.validator] : [];
  //   const asyncValidators = (control && control.asyncValidator) ? [control.asyncValidator] : [];

  //   if(control){
  //     console.log(control)
  //     control.setValidators(validators);
  //     control.setAsyncValidators(asyncValidators);
  //     control.updateValueAndValidity();
  //   }
  // }

  onChange(event? : Event) {
    // console.log(this.controlDir.control?.errors)
    // this.controlDir.control?.valueChanges.subscribe(res => console.log('res', res))
  }

  onTouched() {
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
