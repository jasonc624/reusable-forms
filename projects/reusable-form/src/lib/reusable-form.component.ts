import { Inject, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
export interface Validator {
  validate(c: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange?(fn: () => void): void;
}
export interface ControlValueAccessor {
  writeValue(obj: any): void;

  registerOnChange(fn: any): void;

  registerOnTouched(fn: any): void;

  setDisabledState?(isDisabled: boolean): void;
}
@Injectable()
export class ReusableFormComponent implements OnInit, ControlValueAccessor {
  constructor(private form: FormGroup, @Inject(String) private name: string) {}
  ngOnInit(): void {
    const form = this.form;
    form.valueChanges.subscribe((value: any) => {
      console.log('This is a change to the libary');
      this.onChange(value);
      this.onTouched();
    });
  }
  // Reusable Form Boilerplate
  onChange: any = () => {};
  onTouched: any = () => {};

  get value(): any {
    return this.form.value;
  }

  set value(value: any) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    let obj: any = {};
    obj[this.name] = { valid: this.form.valid };

    return this.form.valid ? null : obj;
  }
}
