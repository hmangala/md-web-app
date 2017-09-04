import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(ac: AbstractControl) {
        console.log('ac-', ac);
        const passw = ac.get('passw'); // to get value in input tag
        console.log('passw', passw);
        const confirmpassw = ac.get('confirmpassw'); // to get value in input tag
        if (passw && confirmpassw) {
            if (passw.value !== confirmpassw.value) {
                console.log('false');
                ac.get('confirmPassword').setErrors( {matchpassword: true} );
            } else {
                console.log('true');
                return null;
            }
        }
    }
}
