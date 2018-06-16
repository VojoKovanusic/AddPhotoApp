import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "./custom.validation";

export class BuildFormDetermination {
  private form: FormGroup;


  build(): FormGroup {

    this.form = new FormGroup({
        
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