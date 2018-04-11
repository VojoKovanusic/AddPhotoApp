import { FormGroup, FormControl, Validators } from "@angular/forms";

export class BuildFormAddPhoto {
private form:FormGroup;


 build(){

this.form = new FormGroup({
    
    photoName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    longitude: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    latitude: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
return this.form;
}}