import { AbstractControl, ValidatorFn } from '@angular/forms';

export class DateValidator {
  static pastOrPresent(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate > today) {
        return { 'past': true };
      }
      return null;
    };
  }
}