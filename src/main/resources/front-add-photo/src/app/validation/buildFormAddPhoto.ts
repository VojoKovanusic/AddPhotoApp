import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "./GpsValidation";

export class BuildFormAddPhoto {
private form:FormGroup;


 build(){

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
      CustomValidation.isFloat
    ]),
    latitude: new FormControl('', [
    
      Validators.minLength(8),
      Validators.maxLength(8),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
return this.form;
}}