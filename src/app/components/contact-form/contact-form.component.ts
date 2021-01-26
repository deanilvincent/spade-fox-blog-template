import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  emailSendingForm = this.formBuilder.group({
    subject: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  })


  constructor(private formBuilder: FormBuilder) { }

  isValidFormField(field: string): boolean {
    var fieldState = this.emailSendingForm.get(field) as FormControl
    
    return (fieldState.touched || fieldState.dirty) && fieldState.invalid
  }

  ngOnInit() {
  }

}
