import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(ac: AbstractControl) {
        const passw = ac.get('passw'); // to get value in input tag
        const confirmpassw = ac.get('confirmpassw'); // to get value in input tag
        if (passw && confirmpassw) {
            if (passw.value !== confirmpassw.value) {
                console.log('false');
                ac.get('confirmpassw').setErrors( {matchpassword: true} );
            } else {
                console.log('true');
                return null;
            }
        }
    }
}
