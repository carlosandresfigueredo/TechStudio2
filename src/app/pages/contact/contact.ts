import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

contactForm: any;
 constructor(private fb: FormBuilder) {
    // 👇 Y la inicializas dentro del constructor
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      alert('Gracias por contactarnos. Te responderemos pronto.');
      this.contactForm.reset();
    }
  }
}