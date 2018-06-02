import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UserService } from "../service/user/user.service.service";
 



export class CustomValidation {

    emails: String[];
    private ismailExist: boolean;
    constructor() { }


    static canotContainSpace(control: AbstractControl): ValidationErrors | null {
        let value = (control.value as string);
        if (/ /.test(value)) {
            return { canotContainSpace: true };
        }
        return null;
    }
    static mustContainSpace(control: AbstractControl): ValidationErrors | null {
        let value = (control.value as string);
        if (/ /.test(value)) {
            return null;
        }
        return { mustContainSpace: true };
    }
    static isFirstLetterUppercase(control: AbstractControl): ValidationErrors | null {
        let value = (control.value as string);
        if (/^[A-Z]/.test(value)) {
            return null;
        }
        return { isFirstLetterUppercase: true };
    }

    static isNumber(control: AbstractControl): ValidationErrors | null {
        if (!isNaN(parseFloat(control.value)) && isFinite(control.value))
            return null;
        return { isNumber: true }
    }

    static isFloat(control: AbstractControl): ValidationErrors | null {
        if (Math.round(control.value) == control.value) {
            return { isFloat: true }
        }
        return null;



    } static isLenghtValid(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).length == 8) {
            return null;
        }
        return { isLenghtValid: true }
    }

    /*      this.userService.getAllEmails()
                .subscribe(data =>{ 
                   if( data.includes(control.value as string))
                {resolve({isMailExist:true})}
                else resolve(null)
                }
                
                
                ) */
    static  isMailExist(control: AbstractControl): Promise<ValidationErrors | null> {
              return new Promise((resolve =>{ 
    
                   if(control.value ==="wbs.vojo@gmail.com")
                resolve({isMailExist:true});

                resolve(null);
                }
                
                
                )

              
            )

       
        
     
     
        


    }

}