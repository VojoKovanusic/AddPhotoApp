import { FormGroup, FormControl, Validators } from "@angular/forms";

export class BuildFormRegister{
private form: FormGroup


 build():FormGroup{
     this.form=new FormGroup({

        firistName:new FormControl(['',
        Validators.required]),

        lastName: new FormControl(['',
        Validators.required]),

        username: new FormControl(['',
        Validators.required]),

        password: new FormControl(['',
        Validators.required]),

     })
     return this.form;
 }
}