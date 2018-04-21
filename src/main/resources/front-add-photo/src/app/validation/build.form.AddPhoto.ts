import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "./custom.validation";

export class BuildFormAddPhoto {
  private form: FormGroup;


  build(): FormGroup {

    this.form = new FormGroup({

      photoName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),

      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      longitude: new FormControl('', [
        Validators.required,
        CustomValidation.isNumber,
        CustomValidation.canotContainSpace,
        CustomValidation.isFloat/* ,
      CustomValidation.isLenghtValid */
      ]),
      latitude: new FormControl('', [
        Validators.required,
        CustomValidation.isNumber,
        CustomValidation.canotContainSpace,
        CustomValidation.isFloat/* ,
      CustomValidation.isLenghtValid */

      ]),
      description: new FormControl('', [

      ]),
    });
    return this.form;
  }
}