import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

export function commonPasswordValidator( control : AbstractControl): ValidationErrors | null
{
  let commonPasswords = ["12345678", "Password", "abcdefgh", "qwertyuiop"];

  if (control.value && commonPasswords.includes(control.value))
  {
    return {'commonPassword':true}
  }
  else
  {
    return null;
  }
}

@Component({
  selector: 'app-form-handling2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-handling2.html',
  styleUrl: './form-handling2.css'
})

export class FormHandling2 {

  userForm !: FormGroup;

  constructor( private formBuilder: FormBuilder) 
  {
    this.userForm = this.formBuilder.group({
      name: ['John', [Validators.required, Validators.minLength(3)]],
      email: ['a@yushChalkegmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() 
  {
    console.log(this.userForm);    
  }

}
