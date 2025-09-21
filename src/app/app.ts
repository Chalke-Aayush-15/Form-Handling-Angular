import { Component, signal } from '@angular/core';
import { FormHandling1 } from './Components/form-handling1/form-handling1';
import { FormHandling2 } from './Components/form-handling2/form-handling2';

@Component({
  selector: 'app-root',
  imports: [FormHandling1, FormHandling2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Form-Handling');
}
