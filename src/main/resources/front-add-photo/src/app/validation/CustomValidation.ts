import { AbstractControl } from "@angular/forms";

export class CustomValidation {

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
       /*  let val:string=control.value;
        if(val.length  == 8) 
        {
            return { isLenghtValid: false }
        }
        return { isLenghtValid: true } */
    }
    
}