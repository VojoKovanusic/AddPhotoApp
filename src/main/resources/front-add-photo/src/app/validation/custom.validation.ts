import { AbstractControl } from "@angular/forms";
import { UserService } from "../service/user/user.service.service";

export class CustomValidation {
    private ismailExist:boolean ;
constructor(private userService:UserService){}


    static canotContainSpace(control: AbstractControl) {
        let value = (control.value as string);
        if (/ /.test(value)) {
            return { canotContainSpace: true };
        }
        return { canotContainSpace: false };
    }


    static isNumber(control: AbstractControl) {
        if (!isNaN(parseFloat(control.value)) && isFinite(control.value))
            return { isNumber: false }
        return { isNumber: true }
    }

    static isFloat(control: AbstractControl) {
        if (Math.round(control.value) == control.value) {
            return { isFloat: true }
        }
        return { isFloat: false }



    } static isLenghtValid(control: AbstractControl) {
       /* izbacuje GRESKU NA METODI length
         if((control.value as string).length  == 8) 
        {
            return { isLenghtValid: false }
        }
        return { isLenghtValid: true } */ 
    }
    static isRobot(control: AbstractControl) {
       
         if ((control.value as number) == 2222) 
         {
             return { isRobot: false }
         }
         return { isRobot: true }  
     }
     
     isMailExist(){
        this.userService.isMailExist("mladisumar@gmail.com")
        .subscribe(
         data => { this.ismailExist = data} 
        ) ;
        return this.ismailExist;
       }
     
}