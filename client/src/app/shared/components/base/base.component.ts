import { Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TranslationService } from "src/app/core/translation/translation.service";
import { DaysEnum } from "../../enums/days-enum";
import { enumToArray, GenderEnum, MassRepetationType, MassTypesEnum } from "../../enums/enums";
import { SectionsEnum } from "../../enums/general-sections-enum";
import { PrimengTableHelper } from "../../helpers/PrimengTableHelper";
import { validation_messages } from "../../helpers/validations";
import { IEnumMapping } from "../../models/response-result";


export abstract class BaseComponent {

  validation_messages = validation_messages
  primengTableHelper: PrimengTableHelper;
  MassRepetationType = MassRepetationType
  GeneralSectionsEnum = SectionsEnum
  massRepetation: IEnumMapping[];
  days: IEnumMapping[];
  massTypes: IEnumMapping[];
  genders: IEnumMapping[];
  generalSections: IEnumMapping[];
  translation: any[] = [];

  constructor(injector: Injector) {
    this.primengTableHelper = new PrimengTableHelper();
    this.massRepetation = enumToArray(MassRepetationType)
    this.days = enumToArray(DaysEnum)
    this.massTypes = enumToArray(MassTypesEnum)
    this.genders = enumToArray(GenderEnum)
    this.generalSections = enumToArray(SectionsEnum)
  }

  noTyping() {
    return false;
  }
  resetControl(form: FormGroup, controlsName: string[]) {
    controlsName.forEach((c) => {
      form.controls[c].reset();
      form.controls[c].clearValidators();
      form.controls[c].updateValueAndValidity();
    });
  }

  findArray(array: any[], key: number) {
    return array.filter(el => {
      return el.id === key
    })
  }

  findValue(array: IEnumMapping[], key: any) {
    if (key && array) {
      return array.filter((el) => {
        return el.id == key;
      })[0].name;
    } else { return null }
  }

  getImage(imgUrl: string) {
    let url = '"' + imgUrl + '"'
    return url
  }

  getImageUrl(imgUrl: string) {
    let url = 'url(' + '"' + imgUrl + '"' + ')'
    return url
  }

  //  groupBy(array: any, prop: string){

  //   let obj = array.reduce((r: any, a:any) => {
  //         r[a[prop]] = r[a[prop]] || [];
  //         r[a[prop]].push(a);
  //         return r;
  //     });

  //     console.log(typeof(obj))
  //     console.log(obj)
  //   //   Object.keys(obj).map(function(personNamedIndex){
  //   //     let person = obj[personNamedIndex];
  //   //     // do something with person
  //   //     console.log(person)
  //   //     return person;
  //   // });

  // }

  groupBy(collection: any, property: string) {
    var i = 0, val, index,
      values = [], result = []; // result = [{day: number, event: []}]
    for (; i < collection.length; i++) {
      val = collection[i][property];
      index = values.indexOf(val);
      if (index > -1)
        result[index].events.push(collection[i]);
      else {
        values.push(val);
        result.push({ [property]: val, events: [collection[i]] });
      }
    }
    return result;
  }


}
