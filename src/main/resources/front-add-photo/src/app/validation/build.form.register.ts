import { FormGroup, FormControl, Validators } from "@angular/forms";

export class BuildFormRegister {
    private form: FormGroup


    build(): FormGroup {
        this.form = new FormGroup({

            firistName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
              ]),

            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.email
              ]),
            userName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
              ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(15)
              ]),
        })
        return this.form;
    }
}