import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "./custom.validation";

export class BuildFormAddPhoto {
  private form: FormGroup;


  build(): FormGroup {

    this.form = new FormGroup({

      photoName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(35),
        CustomValidation.mustContainSpace,
        CustomValidation.isFirstLetterUppercase
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        CustomValidation.isFirstLetterUppercase
      ]),
      longitude: new FormControl('', [
        Validators.required,
        CustomValidation.isFloat,
        CustomValidation.isNumber
      ]),
      latitude: new FormControl('', [
        Validators.required,
        CustomValidation.isFloat,
        CustomValidation.isNumber

      ]),
      description: new FormControl('', [
      
      ]),
   
    });
    return this.form;
  }
}