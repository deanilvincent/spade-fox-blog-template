import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  private regExValidatorForWhiteSpace: Validators = Validators.pattern(
    /^(\s+\S+\s*)*(?!\s).*$/
  );
  emailSendingForm = this.formBuilder.group({
    subject: ['', [Validators.required, this.regExValidatorForWhiteSpace]],
    name: ['', [Validators.required, this.regExValidatorForWhiteSpace]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, this.regExValidatorForWhiteSpace]],
  });

  constructor(private formBuilder: FormBuilder) {}

  isValidFormField(field: string): boolean {
    var fieldState = this.emailSendingForm.get(field) as FormControl;

    return (fieldState.touched || fieldState.dirty) && fieldState.invalid;
  }

  get f() {
    return this.emailSendingForm.controls;
  }

  ngOnInit() {}

  onSubmit() {
    // stop here if form is invalid
    if (this.emailSendingForm.invalid) {
      return;
    }
    // do your stuff here
  }
}
