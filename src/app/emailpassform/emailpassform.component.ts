import { Component, forwardRef, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ReusableFormComponent } from 'reusableForm';
export interface EmailPassValues {
  email: string;
  password: string;
}
export const form = new FormGroup({
  email: new FormControl(),
  password: new FormControl(),
});
@Component({
  selector: 'app-emailpassform',
  templateUrl: './emailpassform.component.html',
  styleUrls: ['./emailpassform.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailpassformComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailpassformComponent),
      multi: true,
    },
  ],
})
export class EmailpassformComponent extends ReusableFormComponent {
  constructor() {
    super(form, 'emailPass');
  }
  emailPassForm = form;
}
