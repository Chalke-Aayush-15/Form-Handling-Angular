import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handling1',
  imports: [FormsModule],
  templateUrl: './form-handling1.html',
  styleUrl: './form-handling1.css'
})
export class FormHandling1 {

  user = {
    email : "",
    password : ""
  };

  onSubmit(Form : NgForm)
  {
    console.log(Form);    
    console.log("Form Submitted",this.user);    
  }

}
